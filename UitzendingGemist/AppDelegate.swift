//
//  AppDelegate.swift
//  UitzendingGemist
//
//  Created by Jeff Kreeftmeijer on 06/11/15.
//  Copyright © 2015 Jeff Kreeftmeijer. All rights reserved.
//

import UIKit
import TVMLKit

@UIApplicationMain
class AppDelegate: UIResponder, UIApplicationDelegate, TVApplicationControllerDelegate {

  var window: UIWindow?

  var appController: TVApplicationController?

  static let TVBaseURL = "http://localhost:9001/"

  static let TVBootURL = "\(AppDelegate.TVBaseURL)js/application.js"

  func application(application: UIApplication, didFinishLaunchingWithOptions launchOptions: [NSObject: AnyObject]?) -> Bool {
    window = UIWindow(frame: UIScreen.mainScreen().bounds)
    let appControllerContext = TVApplicationControllerContext()

    if let javaScriptURL = NSURL(string: AppDelegate.TVBootURL) {
      appControllerContext.javaScriptApplicationURL = javaScriptURL
    }

    appControllerContext.launchOptions["BASEURL"] = AppDelegate.TVBaseURL

    if let launchOptions = launchOptions as? [String: AnyObject] {
      for (kind, value) in launchOptions {
        appControllerContext.launchOptions[kind] = value
      }
    }

    appController = TVApplicationController(context: appControllerContext, window: window, delegate: self)

    return true
  }
}

