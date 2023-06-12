import {
  MouseEvent,
  ChangeEvent,
  TouchEvent,
  WheelEvent,
  FocusEvent,
  DragEvent,
  AnimationEvent,
  ClipboardEvent,
  FormEvent,
  InvalidEvent,
  PointerEvent,
  KeyboardEvent,
  TransitionEvent,
  CompositionEvent
} from "react";

type Result = unknown;
type ResolveEventHandler<E, R> = (event: E, result: R) => void;

// typed event handler with result `return back`
type MouseEventHandlerWithResult<T = Element, R = Result> = ResolveEventHandler<MouseEvent<T>, R>;
type ChangeEventHandlerWithResult<T = Element, R = Result> = ResolveEventHandler<ChangeEvent<T>, R>;
type TouchEventHandlerWithResult<T = Element, R = Result> = ResolveEventHandler<TouchEvent<T>, R>;
type WheelEventHandlerWithResult<T = Element, R = Result> = ResolveEventHandler<WheelEvent<T>, R>;
type FocusEventHandlerWithResult<T = Element, R = Result> = ResolveEventHandler<FocusEvent<T>, R>;
type DragEventHandlerWithResult<T = Element, R = Result> = ResolveEventHandler<DragEvent<T>, R>;
type AnimationEventHandlerWithResult<T = Element, R = Result> = ResolveEventHandler<AnimationEvent<T>, R>;
type ClipboardEventHandlerWithResult<T = Element, R = Result> = ResolveEventHandler<ClipboardEvent<T>, R>;
type FormEventHandlerWithResult<T = Element, R = Result> = ResolveEventHandler<FormEvent<T>, R>;
type InvalidEventHandlerWithResult<T = Element, R = Result> = ResolveEventHandler<InvalidEvent<T>, R>;
type PointerEventHandlerWithResult<T = Element, R = Result> = ResolveEventHandler<PointerEvent<T>, R>;
type KeyboardEventHandlerWithResult<T = Element, R = Result> = ResolveEventHandler<KeyboardEvent<T>, R>;
type TransitionEventHandlerWithResult<T = Element, R = Result> = ResolveEventHandler<TransitionEvent<T>, R>;
type CompositionEventHandlerWithResult<T = Element, R = Result> = ResolveEventHandler<CompositionEvent<T>, R>;

export {
  type ResolveEventHandler,
  type MouseEventHandlerWithResult,
  type ChangeEventHandlerWithResult,
  type TouchEventHandlerWithResult,
  type WheelEventHandlerWithResult,
  type FocusEventHandlerWithResult,
  type DragEventHandlerWithResult,
  type AnimationEventHandlerWithResult,
  type ClipboardEventHandlerWithResult,
  type FormEventHandlerWithResult,
  type InvalidEventHandlerWithResult,
  type PointerEventHandlerWithResult,
  type KeyboardEventHandlerWithResult,
  type TransitionEventHandlerWithResult,
  type CompositionEventHandlerWithResult
};
