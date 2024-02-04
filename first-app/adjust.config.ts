import { Adjust, AdjustEvent, AdjustConfig } from 'react-native-adjust';

const appToken = "n2ckl371a2v4";
const adjustConfig = new AdjustConfig(appToken, AdjustConfig.EnvironmentSandbox);

adjustConfig.setLogLevel(AdjustConfig.LogLevelVerbose);
// adjustConfig.setEventBufferingEnabled()

Adjust.create(adjustConfig);

export { Adjust };

export const ADJUST_EVENTS = {
    follow_event: "pd5dck",
}