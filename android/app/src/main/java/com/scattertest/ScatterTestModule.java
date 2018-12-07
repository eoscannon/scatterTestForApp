package com.scattertest;

import android.content.Context;
import android.util.Log;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.bridge.WritableArray;
import com.facebook.react.bridge.WritableMap;

public class ScatterTestModule extends ReactContextBaseJavaModule {

    private Context context;

    public ScatterTestModule(ReactApplicationContext reactApplicationContext) {
        super(reactApplicationContext);
        context = reactApplicationContext;
    }

    @Override
    public String getName() {
        return "ScatterTestModule";
    }

    @ReactMethod
    public void getIdentity(ReadableMap map, Promise promise) {
        Log.w("getIdentity", map.toString());
        try {
            //{
            // hash: "884debca52a30e04fa7dc4d55cc1c08292a5f45f40a3520a5e3d8a52e6875877",
            // publicKey: "EOS7eN1e4iVwybDvf3m9p8VCCVV3Dks5iU5BVHGkopHQymuL8tynK",
            // name: "MyFirstIdentity",
            // kyc: false,
            // accounts: [{authority: "active", blockchain: "eos", name: "cannontest11", publicKey: "EOS7TxduYf3WAdkkK81xYFuUCWNSevxWtmkrWxinDiXCYi1rCBnxC"}]
            //}
            WritableMap accountsArray0 = Arguments.createMap();
            accountsArray0.putString("blockchain", "eos");
            accountsArray0.putString("name", "testaccount");
            accountsArray0.putString("authority", "active");
            accountsArray0.putString("publicKey", "EOS6MRyAjQq...");

            WritableArray accountsArray = Arguments.createArray();
            accountsArray.pushMap(accountsArray0);

            WritableMap res = Arguments.createMap();
            res.putArray("accounts", accountsArray);
            res.putBoolean("kyc", false);
            res.putString("name", "MyFirstIdentity");
            res.putString("publicKey", "EOS7eN1e4iVwybDvf3m9p8VCCVV3Dks5iU5BVHGkopHQymuL8tynK");
            res.putString("hash", "884debca52a30e04fa7dc4d55cc1c08292a5f45f40a3520a5e3d8a52e6875877");

            promise.resolve(res);
        } catch (Exception e) {
            e.printStackTrace();
            promise.reject(e.getMessage());
        }
    }

    @ReactMethod
    public void authenticate(String randomString, Promise promise) {
        Log.w("authenticate", randomString);
        try {
            //SIG_K1_JyzvGZHzKYfthmMQTWmRwc17iM3Fu73XQ349rRoKPCw4TdkUQPRZwW1pYmM7b9QKtDRqdtYuhVPuwZJHfAxMKfvTFYza3t
            String signedOrigin = "SIG_K1_JyzvGZHzKYfthmMQTWmRwc17iM3Fu73XQ349rRoKPCw4TdkUQPRZwW1pYmM7b9QKtDRqdtYuhVPuwZJHfAxMKfvTFYza3t";
            promise.resolve(signedOrigin);
        } catch (Exception e) {
            e.printStackTrace();
            promise.reject(e.getMessage());
        }
    }

    @ReactMethod
    public void forgetIdentity(Promise promise) {
        Log.w("forgetIdentity", "forgetIdentity");
        try {
            Boolean isForgetIdentitySuccess = true;
            promise.resolve(isForgetIdentitySuccess);
        } catch (Exception e) {
            e.printStackTrace();
            promise.reject(e.getMessage());
        }
    }

    @ReactMethod
    public void suggestNetwork(ReadableMap map, Promise promise) {
        Log.w("suggestNetwork", map.toString());
        try {
            Boolean isSuggestNetworkSuccess = true;
            promise.resolve(isSuggestNetworkSuccess);
        } catch (Exception e) {
            e.printStackTrace();
            promise.reject(e.getMessage());
        }
    }

    @ReactMethod
    public void getArbitrarySignature(ReadableMap map, Promise promise) {
        Log.w("getArbitrarySignature", map.toString());
        try {
            //SIG_K1_K8Lj7R6dLSJKo7n3DJqBEje4HhwGCRy7NJg8XdhMGnJQUkGq5rNG8qeRGStcK88oR8E1ckaD1qxr3mLtTvJg5pKVDNgrVD
            String signedOrigin = "SIG_K1_K8Lj7R6dLSJKo7n3DJqBEje4HhwGCRy7NJg8XdhMGnJQUkGq5rNG8qeRGStcK88oR8E1ckaD1qxr3mLtTvJg5pKVDNgrVD";
            promise.resolve(signedOrigin);
        } catch (Exception e) {
            e.printStackTrace();
            promise.reject(e.getMessage());
        }
    }

    @ReactMethod
    public void requestTransfer(ReadableMap map, Promise promise) {
        Log.w("requestTransfer", map.toString());
        try {
//            broadcast: true
//            processed: {
//                block_num: 30782309
//                ......
//                action_traces: [
//                    {
//                        block_num: 30782309
//                        ......
//                        act: {....}
//                        inline_traces: [{}, {}]
//                        receipt: {.....}
//                    }
//                ]
//            }
            WritableMap processedMap = Arguments.createMap();
            WritableMap res = Arguments.createMap();
            res.putBoolean("broadcast", true);
            res.putMap("processed", processedMap);
            promise.resolve(res);
        } catch (Exception e) {
            e.printStackTrace();
            promise.reject(e.getMessage());
        }
    }

    @ReactMethod
    public void getPublicKey(String blockchain, Promise promise) {
        Log.w("getPublicKey", blockchain);
        try {
            //EOS7TxduYf3WAdkkK81xYFuUCWNSevxWtmkrWxinDiXCYi1rCBnxC
            String publicKey = "EOS7TxduYf3WAdkkK81xYFuUCWNSevxWtmkrWxinDiXCYi1rCBnxC";
            promise.resolve(publicKey);
        } catch (Exception e) {
            e.printStackTrace();
            promise.reject(e.getMessage());
        }
    }

    @ReactMethod
    public void linkAccount(ReadableMap map, Promise promise) {
        Log.w("linkAccount", map.toString());
        try {
            Boolean isLinkAccountSuccess = true;
            promise.resolve(isLinkAccountSuccess);
        } catch (Exception e) {
            e.printStackTrace();
            promise.reject(e.getMessage());
        }
    }

    @ReactMethod
    public void hasAccountFor(ReadableMap map, Promise promise) {
        Log.w("hasAccountFor", map.toString());
        try {
            Boolean ishasAccountForSuccess = true;
            promise.resolve(ishasAccountForSuccess);
        } catch (Exception e) {
            e.printStackTrace();
            promise.reject(e.getMessage());
        }
    }

}
