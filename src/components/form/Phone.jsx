import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

function Phone({ formData, setFormData }) {
  return (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="phone">Phone No</Label>
      <Input
        type="number"
        id="phone"
        placeholder="Phone no"
        value={formData.phone}
        onChange={(event) =>
          setFormData({
            ...formData,
            phone: event.target.value,
          })
        }
      />
    </div>
  );
}

export default Phone;
