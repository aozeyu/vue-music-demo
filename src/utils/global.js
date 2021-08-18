import Icon from "@/base/icon";
import { Carousel, CarouselItem, Table, TableColumn } from "element-ui";
import { formatTime } from "./common";
export default {
  //将vue注入进来
  install(Vue) {
    Vue.component("Icon", Icon);
    Vue.use(Table);
    Vue.use(TableColumn);
    Vue.use(Carousel);
    Vue.use(CarouselItem);
    Vue.filter("formatTime", formatTime);
  },
};
