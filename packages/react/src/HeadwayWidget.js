import React, { useCallback, useEffect, useRef, useMemo } from "react";
import PropTypes from "prop-types";

const HeadwayWidgetClassName = "HW_widget_component";
const HeadwayWidgetSelector = "." + HeadwayWidgetClassName;
const HeadwayWidgetTriggerClassName = "HW_trigger";
const HeadwayWidgetTriggerSelector = "." + HeadwayWidgetTriggerClassName;

const HeadwayWidgetTrigger = ({ forId, component, children }) => {
  const Component = component || "div";
  const className = HeadwayWidgetTriggerClassName + `_${forId}`;

  return <Component className={className}>{children}</Component>;
};

HeadwayWidgetTrigger.defaultProps = {
  forId: 1,
};

const parsePosition = (positionText) => {
  if (positionText.indexOf("-") === -1) {
    return {};
  }

  const [y, x] = positionText.split("-");
  return { x, y };
};

const HeadwayWidget = ({
  id,
  account,
  children,
  position,
  badgePosition,
  component,
  trigger,
  onWidgetReady,
  onShowWidget,
  onShowDetails,
  onReadMore,
  onHideWidget,
  styles,
  options,
  translations,
  ...rest
}) => {
  const onWidgetReadyRef = useRef(onWidgetReady);
  const onShowWidgetRef = useRef(onShowWidget);
  const onShowDetailsRef = useRef(onShowDetails);
  const onReadMoreRef = useRef(onReadMore);
  const onHideWidgetRef = useRef(onHideWidget);
  const optionsRef = useRef(options);
  useEffect(() => {
    onWidgetReadyRef.current =
      onWidgetReady || (options.callbacks && options.callbacks.onWidgetReady);
    onShowWidgetRef.current =
      onShowWidget || (options.callbacks && options.callbacks.onShowWidget);
    onShowDetailsRef.current =
      onShowDetails || (options.callbacks && options.callbacks.onShowDetails);
    onReadMoreRef.current =
      onReadMore || (options.callbacks && options.callbacks.onReadMore);
    onHideWidgetRef.current =
      onHideWidget || (options.callbacks && options.callbacks.onHideWidget);
    optionsRef.current = options;
  });

  const handleWidgetReady = useCallback(
    () => onWidgetReadyRef.current && onWidgetReadyRef.current(),
    []
  );
  const handleShowWidget = useCallback(
    () => onShowWidgetRef.current && onShowWidgetRef.current(),
    []
  );
  const handleShowDetails = useCallback(
    () => onShowDetailsRef.current && onShowDetailsRef.current(),
    []
  );
  const handleReadMore = useCallback(
    () => onReadMoreRef.current && onReadMoreRef.current(),
    []
  );
  const handleHideWidget = useCallback(
    () => onHideWidgetRef.current && onHideWidgetRef.current(),
    []
  );

  const objPosition = useMemo(() => parsePosition(position), [position]);

  const initHeadway = useCallback(() => {
    const hwConfig = {
      ...options,
      selector: HeadwayWidgetSelector + `_${id}`,
      account: account || options.account,
      trigger: trigger
        ? HeadwayWidgetSelector + `_${id}`
        : options.trigger || HeadwayWidgetTriggerSelector + `_${id}`,
      callbacks: {
        onWidgetReady: handleWidgetReady,
        onShowWidget: handleShowWidget,
        onShowDetails: handleShowDetails,
        onReadMore: handleReadMore,
        onHideWidget: handleHideWidget,
      },
      translations,
      position: objPosition,
      badgePosition,
      krzysztof: true,
      styles,
    };

    const widget = window.Headway.getNewWidget();
    widget.init(hwConfig);

    return () => {
      widget.destroy();
    };
  }, [
    account,
    trigger,
    handleWidgetReady,
    handleShowWidget,
    handleShowDetails,
    handleReadMore,
    handleHideWidget,
    badgePosition,
    position,
    translations,
  ]);

  useEffect(() => {
    let destroy;
    if (window.Headway) {
      destroy = initHeadway();
    } else {
      const head = document.getElementsByTagName("head")[0];
      const script = document.createElement("script");
      script.type = "text/javascript";
      const p = new Promise((resolve) => {
        script.onload = () => {
          const d = initHeadway();
          resolve(d);
        };
      });

      destroy = () => {
        p.then((d) => d());
      };
      script.src = "https://cdn.headwayapp.co/widget.js"; // "https://cdn.headwaystaging.com/widget.js"; //;
      head.appendChild(script);
    }
    return destroy;
  }, [initHeadway]);

  const Component = component || "div";

  return (
    <Component
      className={HeadwayWidgetClassName + `_${id}`}
      {...rest}
      style={{ position: "relative", display: "inline-block" }}
    >
      {children}
    </Component>
  );
};

export default HeadwayWidget;

HeadwayWidget.propTypes = {
  /**
   * account of your Headway.
   */
  account: PropTypes.string.isRequired,
  /**
   * id of the Widget. It is required if you have more than one widget instance on the page.
   */
  id: PropTypes.string,
  /**
   * position of a badge
   */
  badgePosition: PropTypes.oneOf([
    "top-left",
    "top-center",
    "top-right",
    "center-left",
    "center",
    "center-right",
    "bottom-left",
    "bottom-center",
    "bottom-right",
  ]),
  /**
   * badge relative widget position
   */
  position: PropTypes.oneOf([
    "top-left",
    "top-right",
    "center-left",
    "center-right",
    "bottom-left",
    "bottom-right",
  ]),
  /**
   * callback fired when widget has loaded
   */
  onWidgetReady: PropTypes.func,
  /**
   * callback fired when widget is shown
   */
  onShowWidget: PropTypes.func,
  /**
   * callback fired when an item in the widget is clicked
   */
  onShowDetails: PropTypes.func,
  /**
   * callback fired when user clicks on readMore link
   */
  onReadMore: PropTypes.func,
  /**
   * callback fired when user closes the widget
   */
  onHideWidget: PropTypes.func,
  /**
   * Translating the text inside of the widget
   * */
  translations: PropTypes.shape({
    title: PropTypes.string,
    labels: PropTypes.shape({
      new: PropTypes.string,
      update: PropTypes.string,
      improvement: PropTypes.string,
    }),
    readMore: PropTypes.string,
    footer: PropTypes.string,
  }),
  /**
   * options defined in classic object format. Read more at https://docs.headwayapp.co/widget
   */
  options: PropTypes.shape({
    account: PropTypes.string,
    callbacks: PropTypes.shape({
      onWidgetReady: PropTypes.func,
      onShowWidget: PropTypes.func,
      onShowDetails: PropTypes.func,
      onReadMore: PropTypes.func,
      onHideWidget: PropTypes.func,
    }),
    translations: PropTypes.shape({
      title: PropTypes.string,
      labels: PropTypes.shape({
        new: PropTypes.string,
        update: PropTypes.string,
        improvement: PropTypes.string,
      }),
      readMore: PropTypes.string,
      footer: PropTypes.string,
    }),
  }),
};

HeadwayWidget.defaultProps = {
  account: "",
  id: "1",
  badgePosition: "bottom-right",
  position: "bottom-right",
  styles: {},
  translations: {},
  options: {},
};

export { HeadwayWidgetTrigger };
