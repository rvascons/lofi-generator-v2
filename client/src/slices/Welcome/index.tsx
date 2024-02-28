import Bounded from "@/components/Bounded";
import Heading from "@/components/Heading";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Welcome`.
 */
export type WelcomeProps = SliceComponentProps<Content.WelcomeSlice>;

/**
 * Component for "Welcome" Slices.
 */
const Welcome = ({ slice }: WelcomeProps): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="col-span-2 col-start-1"
    >
      <Heading as="h1" size="lg">
        {slice.primary.heading}
      </Heading>
      <p className="py-6 text-slate-300">{slice.primary.description}</p>
    </Bounded>
  );
};

export default Welcome;
