import { Composition } from "remotion";

import { IntroComposition } from "./IntroComposition";

export const Root = () => {
  return (
    <Composition
      id="Root"
      component={IntroComposition}
      durationInFrames={180}
      fps={30}
      width={1920}
      height={1080}
    />
  );
};
