@echo off
echo.
echo ============================================
echo   RESOLUTE SOLUTIONS - PARTNER LOGOS SETUP
echo ============================================
echo.
echo This script will help you copy the partner logos to the correct directory.
echo.
echo Required logo files to copy to public\images\partners\:
echo.
echo 1. biovet.png      - Biovet "Innovations for Animal Health Care"
echo 2. neotel.png      - Neotel Technology  
echo 3. vetogen.png     - Vetogen Animal Health
echo 4. flavourtrove.png - Flavour Trove
echo 5. shobha.png      - Shobha Enterprises
echo 6. sri-sharada.png - Sri Sharada Ayurveda
echo 7. chemlife.png    - CHEMLife "Innovations In Bioactives"
echo.
echo Current directory: %CD%
echo Target directory: %CD%\public\images\partners\
echo.
echo Instructions:
echo 1. Save each logo image with the exact filename shown above
echo 2. Copy them to: public\images\partners\
echo 3. The website will automatically display them
echo.
echo Press any key to open the partners directory...
pause
explorer "%CD%\public\images\partners\"
echo.
echo Setup complete! The TrustedPartnersSection is ready to display your logos.
echo.
pause
