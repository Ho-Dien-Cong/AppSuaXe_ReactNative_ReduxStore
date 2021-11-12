import { Dimensions, Text, Platform, PixelRatio, StatusBar } from 'react-native'
import DeviceInfo from 'react-native-device-info'
const MYWIDTH = Dimensions.get('window').width
const MYHEIGHT = Dimensions.get('window').height
const guidelineBaseWidth = 375
const guidelineBaseHeight = 667
const CORE_RATIO = guidelineBaseHeight / guidelineBaseWidth
const MYSCALE = CORE_RATIO / (MYHEIGHT / MYWIDTH)

export const width = num => PixelRatio.roundToNearestPixel(MYWIDTH * (num / 100))
export const height = num => PixelRatio.roundToNearestPixel(MYHEIGHT * (num / 100))
export const scale = (size) => PixelRatio.roundToNearestPixel(MYWIDTH / guidelineBaseWidth * size)
export const verticalScale = (size) => PixelRatio.roundToNearestPixel(MYHEIGHT / guidelineBaseHeight * size)
export const heightScale = num => PixelRatio.roundToNearestPixel(MYHEIGHT * (num * MYSCALE / 100))
const size = {
    _24px:width(2),
  }