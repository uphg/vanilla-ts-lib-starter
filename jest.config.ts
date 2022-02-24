import type {Config} from '@jest/types';

const config: Config.InitialOptions = {
  coverageProvider: "v8",
  testEnvironment: "jsdom",
  // 匹配测试文件
  testMatch: [
    "**/test/**/*.[jt]s?(x)",
    "**/?(*.)+(spec|test).[tj]s?(x)"
  ],
  // 配置测试跳过路径
  testPathIgnorePatterns: [
    "\\\\node_modules\\\\"
  ],
  verbose: true,
};

export default config