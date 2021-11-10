+++ 
date = "2021-10-05"
title = "Creating a MacOS App"
slug = "creating_a_macos_app"
tags = []
categories = []
+++

## But first, what the hell is a .dylib?

If you are building an app, I'm sorry but you cannot escape learning about .dylibs.

dylib = dynamic library.

The goal of dynamic libraries is to reduce the launch time and memory use of an app.

A dynamic library can be directly contrasted with a static library. A static library is a library that is copied into an app's executable file. The upsides of using static libraries are: 1) The app becomes robust and less likely to break, and 2) the app is faster at runtime because all the dependent libraries have already been compiled. The downsides are: 1) the app's executable becomes large, and 2) when a static library is updated, the app executable needs to be rebuilt with the new version of the static library.

Dynamic libraries are separate files and do not become part of the app's executable file. Instead the app carries dynamic library references. When the app is run, a link is established between the app and the actual dynamic libraries. The upsides are 1) the app's executable is smaller, and 2) apps automatically use and benefit from any upates to the dyanmic libraries. The downside is that the app is less robust.

A dynamic library is called and activated based on its software language and operating system (OS).

More Reading

- https://medium.com/@StueyGK/static-libraries-vs-dynamic-libraries-af78f0b5f1e4
- https://developer.apple.com/library/archive/documentation/DeveloperTools/Conceptual/DynamicLibraries/100-Articles/OverviewOfDynamicLibraries.html

## How to Distribute an App

Assuming that the app is already made and is self-contained, you can either distribute it via the Mac App Store, or outside of it. If outside the MacApp Store, you need a way to help users install the app. To do this, you can use a .dmg or a .pkg.

#### What is a .dmg?

DMG stands for disk image file and is used to install software but can contain any type of file. A dmg doesn't know whats inside of it. For example, you could make a dmg for a single text file, and that dmg would place the text file in the Applications folder for example. A .dmg is usually used when a simple copy to the Applications folder is needed for example.

#### What is a .pkg?

PKG are macOS installation packages which contain installer scripts and compressed installation files that are used to install Mac software. A .pkg knows the files iside of it. A .pkg has instructions for how the software it carries should be installed. When you click on a .pkg, the os will follow the instructions. A .pkg can install files in different locations. Generally, people will use a .pkg instead of a .dmg when they need to include installer scripts.

#### What is a Flat Package?

"Flat Package" is usually how people refer to a .pkg which installs some kind of application. Flat packages are xar archives. You can use `pkgutil --expand` to open the content of a flat package, and `pkgutil --flatten` to recreate the .pkg. Flat packages can be a product archive or a component package.

A product archive is a meta-package containing one or more component packages with an XML file specifying the installer behavior. The command line tool `productbuild` can create product archives.

A component package is an installer that installs one component. It can be included as a part of a product archive, or can be an installer on its own.

More Reading

- https://matthew-brett.github.io/docosx/flat_packages.html

## Submitting an App to the App Store

![app store](/images/app_store.png)

Before getting into the step by step process, you need to know the following about submitting an app to the app store:

- The first step is applying the the Apple Developer Program and it takes months to be approved
- Apps needs to be submitted through Xcode
- Two potentially helpful video tutorials if questions come up:
  - https://www.youtube.com/watch?v=fXeDe9tafG8
  - https://www.youtube.com/watch?v=fXeDe9tafG8&t=84s

#### 1. Enroll in Apple Developer Program

- https://developer.apple.com/programs/

#### 2. Setup Apple Developer Account

- Sign all contracts in App Store Connect under "Agreements, Tax and Banking"

#### 3. Create an Xcode Project

#### 4. Register Bundle ID on App Store Connect

- Go to Xcode, in your app project go to Signing & Capabilities, click on Capabilities, search for In-App Purchase, and it should automatically create a provising profile/bundle id. Go back to App Store Connect and youn should see your app under the Identifiers section.

#### 5. Create a New App in App Store Connect

- Go to My Apps > add an app > check macOS > etc.

#### 6. Add App Icon Set to App Project in Xcode

- https://appicon.co

#### 7. Add Version and Build Number in Xcode

#### 8. Add Your Apple ID Under Xcode/Preferences/Accounts

#### 9. Test App in Xcode simulator

#### 10. Archive the Project

- Select the correct device
- Go to Product > Archive

#### 11. Validate App

- In Xcode go to Archives and click Validate App
- Keep default values
- Select automatically manage signing
- It may take some time
- It will say validation was successful in the end

#### 12. Distribute App

This basically uploads the app to App Store Connect.

- In Xcode got to Archives and click Distribute App
- Select App Store COnnect
- Select Upload
- Keep defaults
- Select Automatically manage signing
- Then an Upload progress bar should appear
- In the end it will say sucessfuly uploaded

#### 13. Check TestFlight in App Store Connect

- Go to App Store Connect and in the dropdown select TestFlight
- It will say the app is processing

#### 14. Select the Build To Be Reviewed

#### 15. Submit for Review
