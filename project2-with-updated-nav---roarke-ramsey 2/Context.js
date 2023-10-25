import * as React from 'react';
import { useState, createContext, useContext } from 'react';

//Font size context.
export const FontSizeContext = createContext([]);

//Brightness context.
export const BrightnessContext = createContext([]);

//Sound effect context.
export const SoundEffectContext = createContext([]);

//Sound effect function context.
export const SoundEffectFunctionContext = createContext();