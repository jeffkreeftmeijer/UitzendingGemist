# UitzendingGemist

An Unofficial Apple TV app for http://UitzendingGemist.nl

![Home](https://raw.githubusercontent.com/jeffkreeftmeijer/UitzendingGemist/master/Screenshots/home.png)

![Recent](https://raw.githubusercontent.com/jeffkreeftmeijer/UitzendingGemist/master/Screenshots/recent.png)

![Popular](https://raw.githubusercontent.com/jeffkreeftmeijer/UitzendingGemist/master/Screenshots/popular.png)

![Episode](https://raw.githubusercontent.com/jeffkreeftmeijer/UitzendingGemist/master/Screenshots/episode.png)

![Search](https://raw.githubusercontent.com/jeffkreeftmeijer/UitzendingGemist/master/Screenshots/search.png)

## Installation

You can install UitzendingGemist onto your Apple TV by sideloading it onto your device via Xcode.

Before you get started, make sure you have

- A Mac (or a virtual machine) running OS X 10.10.5 or higher, with [Xcode](https://itunes.apple.com/en/app/xcode/id497799835) 7.1 or higher
- A (free) [Apple Developer account](http://developer.apple.com)
- A USB Type C cable to connect your Apple TV to your computer

Steps

1. Start Xcode and go to Source Control > Check Out.
![Start Xcode and go to Source Control > Check Out.](https://raw.githubusercontent.com/jeffkreeftmeijer/UitzendingGemist/master/Screenshots/Installation/checkout.png)

2. Enter `https://github.com/jeffkreeftmeijer/UitzendingGemist.git` and click “Next”.
![Enter `https://github.com/jeffkreeftmeijer/UitzendingGemist.git` and click “Next”.](Screenshots/Installation/checkout2.png)

3. Choose for "master" and click “Download”.
![Choose for "master" and click “Download”.](https://raw.githubusercontent.com/jeffkreeftmeijer/UitzendingGemist/master/Screenshots/Installation/branch.png)

4. Connect your Apple TV to your computer.
5. Click on the project “UitzendingGemist”.
6. Change the Bundle Identifier so it's unique, e.g. by adding your name.
![Change the Bundle Identifier so it's unique, e.g. by adding your name.](https://raw.githubusercontent.com/jeffkreeftmeijer/UitzendingGemist/master/Screenshots/Installation/identifier.png)
7. If you see ”No matching provisioning profiles found”, click Fix Issue and login with your Apple ID/Developer Account.
![If you see ”No matching provisioning profiles found”, click Fix Issue and login with your Apple ID/Developer Account.](https://raw.githubusercontent.com/jeffkreeftmeijer/UitzendingGemist/master/Screenshots/Installation/team.png)
8. Select your Apple TV in the Device menu next to the play/stop button.
![Select your Apple TV in the menu next to the play/stop button.](https://raw.githubusercontent.com/jeffkreeftmeijer/UitzendingGemist/master/Screenshots/Installation/device.png)
9. Press play to install the app to your device.

If you run into any issues installing the app onto your device, please open [an issue](https://github.com/jeffkreeftmeijer/UitzendingGemist/issues), so somebody can try to help you out.

Once you have the app running on your device, you don't have to use Xcode to update the app as most changes are done on the `client/`, which is hosted on S3 and updated when something changes in the repository.

## Development

The `client/` directory contains the javascipt application files and TVML templates to render the application. By default, the app uses [a hosted version](http://atvnpo.s3-website-us-east-1.amazonaws.com) of the client to make it easy to install the app on your device. For development, you'll have to run the server locally.

    $ cd client/
    $ python -m SimpleHTTPServer
    Serving HTTP on 0.0.0.0 port 8000 ...
    
Now, update `UitzendingGemist/AppDelegate.swift` to use your local server instead of the hosted one:

    static let TVBaseURL = "http://localhost:8000/"
    
Now, build and run the app and it should use your local server.
    
Please [create an issue](https://github.com/jeffkreeftmeijer/UitzendingGemist/issues/new) if you run into any problems.
