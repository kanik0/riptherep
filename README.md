# RiptheRep
RiptheRep Chrome Extension 0.6

This extension allows the users to remove the paywall and unlock the content of some Italian news websites.

Supported websites:
- https://rep.repubblica.it (removes the paywall and unlocks the content of the article)
- https://www.ilsole24ore.com (removes the 5 articles per day limit)
- http://iltirreno.gelocal.it (removes the paywall and unlocks the content of the article)
- http://www.limesonline.com (removes the paywall from all the pages)

Feel free to request new websites to be added

# Usage
Add the extension to Chrome:
- Clone/download the repository
- Go to your extensions settings page
- Enable Developer Mode
- Click on "Load unpacked extension" and select the folder where you cloned this repository

The extension works straight away, begin browsing :)
If the paywall is still there, please try reloading the page!

**Warning**: On ilsole24ore.com and www.limesonline.com you must be logged out in order to successfully remove the paywall.

# TODO
- when the user moves from a page to another, the page must be reloaded in order to remove the paywall
- find another way to inject the script when the page is loaded, setTimeOut() might not work for everyone
- ~~find a safer way to select the right nodes to edit~~
