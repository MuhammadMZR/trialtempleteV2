foreach ($seq in 1..3) {
    $dir = "c:\Users\Sparkers\.antigravity\Trial Template\public\sequence-$seq"
    if (Test-Path $dir) {
        Get-ChildItem -Path $dir -Filter "*.jpg" | ForEach-Object {
            # Extract number
            $numMatch = [regex]::Match($_.Name, '\d+')
            if ($numMatch.Success) {
                $num = [int]$numMatch.Value
                $newName = $num.ToString("D4") + ".jpg"
                Rename-Item -Path $_.FullName -NewName $newName -Force
            }
        }
    }
}
