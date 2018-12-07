//
//  ScatterTest.m
//  scatterTest
//
//  Created by 朱敬兴 on 2018/12/5.
//  Copyright © 2018年 Facebook. All rights reserved.
//

#import "ScatterTest.h"

@implementation ScatterTestModule
RCT_EXPORT_MODULE();

// 获取身份
// getIdentity
RCT_EXPORT_METHOD(getIdentity:(NSDictionary *)map resolve:(RCTPromiseResolveBlock)resolve reject:(RCTPromiseRejectBlock)reject)
{
  NSLog(@"RN传递过来的getIdentity的字典：%@", map);
//  测试解析字典
//  NSArray *accounts = pram[@"accounts"];
//  NSDictionary *account = accounts[0];
//  NSString *chainId = account[@"chainId"];
//  NSLog(@"chainId: %@", chainId);
//  NSString *blockchain = pram[@"accounts"][0][@"blockchain"];
//  NSLog(@"blockchain: %@", blockchain);

  NSDictionary * accountsArray0 = @{
    @"blockchain":@"eos",
    @"name":@"testaccount",
    @"authority":@"authority",
    @"publicKey":@"publicKey",
  };
  NSArray * accountsArray = @[accountsArray0];
  bool kyc = false;
  NSDictionary * response = @{
    @"accounts": accountsArray,
    @"kyc": @(kyc),
    @"name": @"MyFirstIdentity",
    @"publicKey": @"EOS7eN1e4iVwybDvf3m9p8VCCVV3Dks5iU5BVHGkopHQymuL8tynK",
    @"hash": @"884debca52a30e04fa7dc4d55cc1c08292a5f45f40a3520a5e3d8a52e6875877"
  };
  resolve(response);
}


// 清除身份
// forgetIdentity
RCT_EXPORT_METHOD(forgetIdentity:(RCTPromiseResolveBlock)resolve reject:(RCTPromiseRejectBlock)reject)
{
  NSLog(@"RN传递过来的forgetIdentity的字典：");
  
  bool response = true;
  
  resolve(@(response));
}

// 认证
// authenticate
RCT_EXPORT_METHOD(authenticate:(NSString *)randomString resolve:(RCTPromiseResolveBlock)resolve reject:(RCTPromiseRejectBlock)reject)
{
  NSLog(@"RN传递过来的authenticate的randomString：%@", randomString);
  
  NSString * signedOrigin = @"SIG_K1_JyzvGZHzKYfthmMQTWmRwc17iM3Fu73XQ349rRoKPCw4TdkUQPRZwW1pYmM7b9QKtDRqdtYuhVPuwZJHfAxMKfvTFYza3t";
  
  resolve(signedOrigin);
}

// 切换网络
// suggestNetwork
RCT_EXPORT_METHOD(suggestNetwork:(NSDictionary *)network resolve:(RCTPromiseResolveBlock)resolve reject:(RCTPromiseRejectBlock)reject)
{
  NSLog(@"RN传递过来的suggestNetwork的network：%@", network);
  
  bool response = true;
  
  resolve(@(response));
}

// 获取任意签名
// getArbitrarySignature
RCT_EXPORT_METHOD(getArbitrarySignature:(NSDictionary *)map resolve:(RCTPromiseResolveBlock)resolve reject:(RCTPromiseRejectBlock)reject)
{
  NSLog(@"RN传递过来的getArbitrarySignature的map：%@", map);
  
  NSString * signedOrigin = @"SIG_K1_K8Lj7R6dLSJKo7n3DJqBEje4HhwGCRy7NJg8XdhMGnJQUkGq5rNG8qeRGStcK88oR8E1ckaD1qxr3mLtTvJg5pKVDNgrVD";
  
  resolve(signedOrigin);
}

// 发送交易
// requestTransfer
RCT_EXPORT_METHOD(requestTransfer:(NSDictionary *)map resolve:(RCTPromiseResolveBlock)resolve reject:(RCTPromiseRejectBlock)reject)
{
  NSLog(@"RN传递过来的requestTransfer的map：%@", map);
  
  NSDictionary * processed = @{
    @"block_num":@30782309,
    @"...":@"...",
    @"action_traces":@[@{@"...": @"..."}]
  };
  
  bool broadcast = true;
  
  NSDictionary * response = @{
    @"processed": processed,
    @"broadcast": @(broadcast),
    @"name": @"MyFirstIdentity",
    @"publicKey": @"EOS7eN1e4iVwybDvf3m9p8VCCVV3Dks5iU5BVHGkopHQymuL8tynK",
    @"hash": @"884debca52a30e04fa7dc4d55cc1c08292a5f45f40a3520a5e3d8a52e6875877"
  };
  
  resolve(response);
}

// 获取公钥
// getPublicKey
RCT_EXPORT_METHOD(getPublicKey:(NSString *)blockchain resolve:(RCTPromiseResolveBlock)resolve reject:(RCTPromiseRejectBlock)reject)
{
  NSLog(@"RN传递过来的getPublicKey的blockchain：%@", blockchain);
  
  NSString * publicKey = @"EOS7TxduYf3WAdkkK81xYFuUCWNSevxWtmkrWxinDiXCYi1rCBnxC";
  
  resolve(publicKey);
}

// 关联账户
// linkAccount
RCT_EXPORT_METHOD(linkAccount:(NSDictionary *)map resolve:(RCTPromiseResolveBlock)resolve reject:(RCTPromiseRejectBlock)reject)
{
  NSLog(@"RN传递过来的linkAccount的map：%@", map);
  
  bool isLinkAccountSuccess = true;
  
  resolve(@(isLinkAccountSuccess));
}

// 查询账户
// hasAccountFor
RCT_EXPORT_METHOD(hasAccountFor:(NSDictionary *)map resolve:(RCTPromiseResolveBlock)resolve reject:(RCTPromiseRejectBlock)reject)
{
  NSLog(@"RN传递过来的linkAccount的map：%@", map);
  
  bool ishasAccountForSuccess = true;
  
  resolve(@(ishasAccountForSuccess));
}

@end
