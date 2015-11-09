# UitzendingGemist

An Unofficial Apple TV app for http://UitzendingGemist.nl

![Recent](https://raw.githubusercontent.com/jeffkreeftmeijer/UitzendingGemist/master/Screenshots/recent.png)

![Popular](https://raw.githubusercontent.com/jeffkreeftmeijer/UitzendingGemist/master/Screenshots/popular.png)

![Episode](https://raw.githubusercontent.com/jeffkreeftmeijer/UitzendingGemist/master/Screenshots/episode.png)

![Search](https://raw.githubusercontent.com/jeffkreeftmeijer/UitzendingGemist/master/Screenshots/search.png)

## Installation

After cloning the project, you should be able to build and run it on your Apple TV using XCode 7.1 without having to change anything. If you run into any issues, [let me know](https://github.com/jeffkreeftmeijer/UitzendingGemist/issues/new) so I can try to help you out and update the guide.

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
