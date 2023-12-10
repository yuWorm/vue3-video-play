/*
 * @Author: web.王晓冬
 * @Date: 2020-10-29 10:08:49
 * @LastEditors: web.王晓冬
 * @LastEditTime: 2021-08-22 08:43:52
 * @Description: Table
 */
import VideoPlay from './video-play/main.vue';
import DContextMenu from './components/d-contextmenu.vue'
import DICon from './components/d-icon.vue'
import DLoading from './components/d-loading.vue'
import DPlayerTop from './components/d-player-top.vue'
import DSlider from './components/d-slider.vue'
import DStatus from './components/d-status.vue'
import DSwitch from './components/d-switch.vue'

function install(app) {
  app.component(VideoPlay.name, VideoPlay)
}
VideoPlay.install = install
export {
  VideoPlay,
  install,
  DContextMenu,
  DICon,
  DLoading,
  DPlayerTop,
  DSlider,
  DStatus,
  DSwitch
}
export default VideoPlay;