import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

function Roll({ formData, setFormData }) {
  return (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="">Roll No</Label>
      <Input
        type="number"
        id="roll"
        placeholder="Roll no"
        value={formData.roll}
        onChange={(event) =>
          setFormData({
            ...formData,
            roll: event.target.value,
          })
        }
      />
    </div>
  );
}

export default Roll;
