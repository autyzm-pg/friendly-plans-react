fastlane documentation
================
# Installation

Make sure you have the latest version of the Xcode command line tools installed:

```
xcode-select --install
```

Install _fastlane_ using
```
[sudo] gem install fastlane -NV
```
or alternatively using `brew cask install fastlane`

# Available Actions
## Android
### android staging_firebase_config
```
fastlane android staging_firebase_config
```
Download staging Firebase config for Android
### android production_firebase_config
```
fastlane android production_firebase_config
```
Download production Firebase config for Android
### android staging_googleplay_alpha
```
fastlane android staging_googleplay_alpha
```
Deploy a new staging build to GooglePlay Alpha channel
### android staging_googleplay_production
```
fastlane android staging_googleplay_production
```
Deploy a new staging build to GooglePlay Production channel
### android release_googleplay_alpha
```
fastlane android release_googleplay_alpha
```
Deploy a new production version to the Google Play Alpha channel
### android release_googleplay_production
```
fastlane android release_googleplay_production
```
Deploy a new production version to the Google Play Production channel

----

## iOS
### ios staging_firebase_config
```
fastlane ios staging_firebase_config
```
Download staging Firebase config for iOS
### ios production_firebase_config
```
fastlane ios production_firebase_config
```
Download production Firebase config for iOS
### ios staging_testflight
```
fastlane ios staging_testflight
```
Deploy a new staging version to Apple Testflight
### ios staging_appstore
```
fastlane ios staging_appstore
```
Deploy a new staging version to Apple AppStore
### ios production_testflight
```
fastlane ios production_testflight
```
Deploy a new production version to Apple Testflight
### ios production_appstore
```
fastlane ios production_appstore
```
Deploy a new production version to Apple AppStore

----

This README.md is auto-generated and will be re-generated every time [fastlane](https://fastlane.tools) is run.
More information about fastlane can be found on [fastlane.tools](https://fastlane.tools).
The documentation of fastlane can be found on [docs.fastlane.tools](https://docs.fastlane.tools).
