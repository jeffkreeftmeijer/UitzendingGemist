# UitzendingGemist

An Unofficial Apple TV app for http://UitzendingGemist.nl

![Home](https://raw.githubusercontent.com/jeffkreeftmeijer/UitzendingGemist/master/Screenshots/home.png)

![Recent](https://raw.githubusercontent.com/jeffkreeftmeijer/UitzendingGemist/master/Screenshots/recent.png)

![Popular](https://raw.githubusercontent.com/jeffkreeftmeijer/UitzendingGemist/master/Screenshots/popular.png)

![Episode](https://raw.githubusercontent.com/jeffkreeftmeijer/UitzendingGemist/master/Screenshots/episode.png)

![Search](https://raw.githubusercontent.com/jeffkreeftmeijer/UitzendingGemist/master/Screenshots/search.png)

## Installation

You need
- a Mac (or OS X in a virtual machine)
- Xcode (free from Mac App Store)
- Free developer account (http://developer.apple.com)
- USB Type C cable

Steps
1. Start Xcode and go to Source Control > Check Out.
![1](https://raw.githubusercontent.com/jeffkreeftmeijer/UitzendingGemist/master/Installation-Images/1.png)
2. Enter "https://github.com/jeffkreeftmeijer/UitzendingGemist.git" and click next.
![2](https://raw.githubusercontent.com/jeffkreeftmeijer/UitzendingGemist/master/Installation-Images/2.png)
3. Choose for "master" and click Download.
![3](https://raw.githubusercontent.com/jeffkreeftmeijer/UitzendingGemist/master/Installation-Images/3.png)
4. Connect the Apple TV to you Mac.
5. Click on the project "UitzendingGemist".
6. Make a unique Bundle Identifier, e.g. by adding your name.
![6](https://raw.githubusercontent.com/jeffkreeftmeijer/UitzendingGemist/master/Installation-Images/7.png)
7. If you see "No matching provisioning profiles found", click Fix Issue and login with your Apple ID/Developer Account. It should look like something like this image.
![8](https://raw.githubusercontent.com/jeffkreeftmeijer/UitzendingGemist/master/Installation-Images/8.png)
8. Select your Apple TV in the menu next to the play/stop button.
![9](https://raw.githubusercontent.com/jeffkreeftmeijer/UitzendingGemist/master/Installation-Images/9.png)
9. Press play and it is installing.

Once you have the app running on your device, you don't have to use XCode to update the app as most changes are done on the `client/`, which is hosted on S3 and updated when something changes in the repository.

## Development

The `client/` directory contains the javascipt application files and TVML templates to render the application. By default, the app uses [a hosted version](http://atvnpo.s3-website-us-east-1.amazonaws.com) of the client to make it easy to install the app on your device. For development, you'll have to run the server locally.

    $ cd client/
    $ python -m SimpleHTTPServer
    Serving HTTP on 0.0.0.0 port 8000 ...
    
Now, update `UitzendingGemist/AppDelegate.swift` to use your local server instead of the hosted one:

    static let TVBaseURL = "http://localhost:8000/"
    
Now, build and run the app and it should use your local server.
    
Please [create an issue](https://github.com/jeffkreeftmeijer/UitzendingGemist/issues/new) if you run into any problems.
