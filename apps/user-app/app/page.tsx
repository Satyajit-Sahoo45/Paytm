import { Button } from "@repo/ui/button";

export default function Page(): JSX.Element {
  return (
    <div className="text-2xl underline">
      hi there
      <Button appName="hii">click me</Button>
    </div>
  );
}
