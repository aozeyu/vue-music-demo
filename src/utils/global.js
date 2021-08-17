import Icon from "@/base/icon";
import { Carousel, CarouselItem } from "element-ui";
export default {
  //将vue注入进来
  install(Vue) {
    Vue.component("Icon", Icon);
    Vue.use(Carousel);
    Vue.use(CarouselItem);
  },
};
