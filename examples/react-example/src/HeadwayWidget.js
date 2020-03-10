import React, { useCallback, useEffect, useRef } from "react";

const HeadwayWidgetClassName = "headway-widget";
const HeadwayWidgetSelector = "." + HeadwayWidgetClassName;
const HeadwayWidgetTriggerClassName = "headway-widget-trigger";
const HeadwayWidgetTriggerSelector = "." + HeadwayWidgetTriggerClassName;

const HeadwayWidgetTrigger = ({ component, children }) => {
  const Component = component || "div";

  return (
    <Component className={HeadwayWidgetTriggerClassName}>{children}</Component>
  );
};

const refCount = { current: 0 };

const HeadwayWidget = ({
  account,
  children,
  badgePlacement,
  component,
  trigger,
  onWidgetReady,
  onShowWidget,
  onShowDetails,
  onReadMore,
  onHideWidget,
  options,
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

  const initHeadway = useCallback(() => {
    const hwConfig = {
      ...options,
      selector: HeadwayWidgetSelector,
      account: account || options.account,
      trigger: trigger
        ? HeadwayWidgetSelector
        : options.trigger || HeadwayWidgetTriggerSelector,
      callbacks: {
        onWidgetReady: handleWidgetReady,
        onShowWidget: handleShowWidget,
        onShowDetails: handleShowDetails,
        onReadMore: handleReadMore,
        onHideWidget: handleHideWidget
      }
    };
    //console.log('init', hwConfig);
    window.Headway.init(hwConfig);

    const iconHalfWidth = "-16px";

    const badgeCount = document.getElementById("HW_badge_cont");
    if (badgeCount) {
      badgeCount.style.position = "absolute";

      if (badgePlacement === "bottom-right") {
        badgeCount.style.bottom = iconHalfWidth;
        badgeCount.style.right = iconHalfWidth;
      } else if (badgePlacement === "bottom-left") {
        badgeCount.style.bottom = iconHalfWidth;
        badgeCount.style.left = iconHalfWidth;
      } else if (badgePlacement === "top-right") {
        badgeCount.style.top = iconHalfWidth;
        badgeCount.style.right = iconHalfWidth;
      } else if (badgePlacement === "top-left") {
        badgeCount.style.top = iconHalfWidth;
        badgeCount.style.left = iconHalfWidth;
      }
    }
  }, [
    account,
    trigger,
    handleWidgetReady,
    handleShowWidget,
    handleShowDetails,
    handleReadMore,
    handleHideWidget,
    badgePlacement
  ]);

  useEffect(() => {
    if (window.Headway) {
      initHeadway();
    } else {
      const head = document.getElementsByTagName("head")[0];
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.onload = () => {
        initHeadway();
      };
      script.src = "https://cdn.headwayapp.co/widget.js";
      head.appendChild(script);
    }
  }, [initHeadway]);

  useEffect(() => {
    if (refCount.current > 0) {
      console.error("More than one HeadwayWidget detected");
    }
    refCount.current++;
    return () => {
      refCount.current--;
    };
  }, []);

  const Component = component || "div";

  return (
    <Component
      className={HeadwayWidgetClassName}
      {...rest}
      style={{ position: "relative", display: "inline-block" }}
    >
      {children}
    </Component>
  );
};

export default HeadwayWidget;

HeadwayWidget.defaultProps = {
  id: "",
  badgePlacement: "bottom-right",
  options: {}
};

export { HeadwayWidgetTrigger };
