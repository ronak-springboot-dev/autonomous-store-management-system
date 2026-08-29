# Regenerates public/architecture-diagram.svg from diagrams/architecture.puml
# using PlantUML's public rendering server (www.plantuml.com), via the
# standard raw-deflate + custom-base64 PlantUML URL encoding.
# Run: powershell -File scripts/render-diagram.ps1

$ErrorActionPreference = "Stop"

function Encode6Bit([int]$b) {
  if ($b -lt 10) { return [char](48 + $b) }
  $b -= 10
  if ($b -lt 26) { return [char](65 + $b) }
  $b -= 26
  if ($b -lt 26) { return [char](97 + $b) }
  $b -= 26
  if ($b -eq 0) { return '-' }
  if ($b -eq 1) { return '_' }
  return '?'
}

function Append3Bytes([byte]$b1, [byte]$b2, [byte]$b3) {
  $c1 = $b1 -shr 2
  $c2 = (($b1 -band 0x3) -shl 4) -bor ($b2 -shr 4)
  $c3 = (($b2 -band 0xF) -shl 2) -bor ($b3 -shr 6)
  $c4 = $b3 -band 0x3F
  return (Encode6Bit ($c1 -band 0x3F)) + (Encode6Bit ($c2 -band 0x3F)) + (Encode6Bit ($c3 -band 0x3F)) + (Encode6Bit ($c4 -band 0x3F))
}

function Encode-PlantUml([byte[]]$data) {
  $sb = New-Object System.Text.StringBuilder
  for ($i = 0; $i -lt $data.Length; $i += 3) {
    $b1 = $data[$i]
    $b2 = if ($i + 1 -lt $data.Length) { $data[$i + 1] } else { 0 }
    $b3 = if ($i + 2 -lt $data.Length) { $data[$i + 2] } else { 0 }
    [void]$sb.Append((Append3Bytes $b1 $b2 $b3))
  }
  return $sb.ToString()
}

$root = Split-Path -Parent $PSScriptRoot
$pumlPath = Join-Path $root "diagrams\architecture.puml"
$outPath = Join-Path $root "public\architecture-diagram.svg"

$text = Get-Content -Raw -Encoding UTF8 $pumlPath
$bytes = [System.Text.Encoding]::UTF8.GetBytes($text)

$msIn = New-Object System.IO.MemoryStream(, $bytes)
$msOut = New-Object System.IO.MemoryStream
$deflate = New-Object System.IO.Compression.DeflateStream($msOut, [System.IO.Compression.CompressionLevel]::Optimal, $true)
$msIn.CopyTo($deflate)
$deflate.Close()
$compressed = $msOut.ToArray()

$encoded = Encode-PlantUml $compressed
$url = "https://www.plantuml.com/plantuml/svg/" + $encoded
Write-Output "URL length: $($url.Length)"

try {
  Invoke-WebRequest -Uri $url -OutFile $outPath -UseBasicParsing
  Write-Output "Wrote $outPath ($((Get-Item $outPath).Length) bytes)"
} catch {
  Write-Output "FAIL: $($_.Exception.Message)"
  if ($_.Exception.Response) {
    $stream = $_.Exception.Response.GetResponseStream()
    $reader = New-Object System.IO.StreamReader($stream)
    Write-Output $reader.ReadToEnd()
  }
}
