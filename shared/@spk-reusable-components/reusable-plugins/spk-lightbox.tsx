import { Fragment } from 'react';
import Lightbox, { Slide, Plugin, PluginProps, ControllerSettings, PortalSettings, ToolbarSettings, AnimationSettings } from 'yet-another-react-lightbox';
import "yet-another-react-lightbox/styles.css";
import Fullscreen from 'yet-another-react-lightbox/plugins/fullscreen';
import Slideshow from 'yet-another-react-lightbox/plugins/slideshow';
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import 'yet-another-react-lightbox/plugins/thumbnails.css';

interface LightboxGalleryProps {
  open: boolean;
  index?: number;
  scroll?: boolean;
  on?: boolean; // not sure about this — maybe rename?
  style?: React.CSSProperties;
  mainClass?: string;
  portals?: PortalSettings;
  Controller?: ControllerSettings;
  plugins?: Plugin[];
  label?: Record<string, string>;
  toolbar?: ToolbarSettings;
  Carousel?: boolean;
  animation?: AnimationSettings;
  slides?: Slide[];
  close?: () => void;
  zoom?: { maxZoomPixelRatio: number; scrollToZoom: boolean };
}

export const Lightboxcomponent: React.FC<LightboxGalleryProps> = ({
  open,
  index,
  scroll = true,
  on = true,
  style = {},
  mainClass = '',
  portals = false,
  Controller,
  plugins = [Fullscreen, Slideshow, Thumbnails, Zoom],
  label = { zoomIn: 'Zoom In', zoomOut: 'Zoom Out' },
  toolbar = true,
  Carousel = true,
  animation = 'fade',
  slides,
  close,
  zoom = { maxZoomPixelRatio: 10, scrollToZoom: true }
}) => {
  return (
    <Fragment>
      <Lightbox
        open={open}
        index={index}
        // noScroll={!scroll} // uncomment if needed and supported
        // on={on} // This prop doesn’t exist on Lightbox, remove or rename
        style={style}
        controller={Controller}
        portal={portals}
        className={mainClass}
        plugins={plugins}
        zoom={zoom}
        labels={label}
        toolbar={toolbar}
        carousel={Carousel}
        animation={animation}
        slides={slides}
        close={close}
      />
    </Fragment>
  );
};
