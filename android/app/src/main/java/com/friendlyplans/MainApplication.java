package com.friendlyplans;

import android.app.Application;

import java.util.Arrays;
import java.util.List;

import com.facebook.react.ReactApplication;
import org.reactnative.camera.RNCameraPackage;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;

import io.invertase.firebase.RNFirebasePackage;
import io.invertase.firebase.auth.RNFirebaseAuthPackage;
import io.invertase.firebase.fabric.crashlytics.RNFirebaseCrashlyticsPackage;
import io.invertase.firebase.analytics.RNFirebaseAnalyticsPackage;
import io.invertase.firebase.messaging.RNFirebaseMessagingPackage;
import io.invertase.firebase.notifications.RNFirebaseNotificationsPackage;
import io.invertase.firebase.firestore.RNFirebaseFirestorePackage;

import org.devio.rn.splashscreen.SplashScreenReactPackage;

import com.lugg.ReactNativeConfig.ReactNativeConfigPackage;
import com.dylanvann.fastimage.FastImageViewPackage;
import com.learnium.RNDeviceInfo.RNDeviceInfo;
import com.oblador.vectoricons.VectorIconsPackage;
import com.swmansion.gesturehandler.react.RNGestureHandlerPackage;


public class MainApplication extends Application implements ReactApplication {

    private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
        @Override
        public boolean getUseDeveloperSupport() {
            return BuildConfig.DEBUG;
        }

        @Override
        protected List<ReactPackage> getPackages() {
            return Arrays.<ReactPackage>asList(
                    new MainReactPackage(),
            new RNCameraPackage(),
                    new ReactNativeConfigPackage(),
                    new FastImageViewPackage(),
                    new RNDeviceInfo(),
                    new VectorIconsPackage(),
                    new RNFirebasePackage(),
                    new SplashScreenReactPackage(),
                    new RNGestureHandlerPackage(),
                    new RNFirebaseAuthPackage(),
                    new RNFirebaseCrashlyticsPackage(),
                    new RNFirebaseAnalyticsPackage(),
                    new RNFirebaseMessagingPackage(),
                    new RNFirebaseNotificationsPackage(),
                    new RNFirebaseFirestorePackage()
            );
        }

        @Override
        protected String getJSMainModuleName() {
            return "index";
        }
    };

    @Override
    public ReactNativeHost getReactNativeHost() {
        return mReactNativeHost;
    }

    @Override
    public void onCreate() {
        super.onCreate();
        SoLoader.init(this, false);
    }
}
