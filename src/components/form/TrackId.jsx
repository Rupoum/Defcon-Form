import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

function TrackId({ formData, setFormData }) {
  return (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="link">TryHackME ID</Label>
      <Input
        type="url"
        id="Link"
        placeholder="Link"
        value={formData.trackId}
        onChange={(event) =>
          setFormData({
            ...formData,
            trackId: event.target.value,
          })
        }
      />
    </div>
  );
}

export default TrackId;
