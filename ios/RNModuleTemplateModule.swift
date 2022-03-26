//
//  RNModuleTemplateModule.swift
//  RNModuleTemplateModule
//
//  Copyright © 2022 Bruno Arruda. All rights reserved.
//

import Foundation

@objc(RNModuleTemplateModule)
class RNModuleTemplateModule: NSObject {
  @objc
  func constantsToExport() -> [AnyHashable : Any]! {
    return ["count": 1]
  }

  @objc
  static func requiresMainQueueSetup() -> Bool {
    return true
  }
}
