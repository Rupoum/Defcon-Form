import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

function Name({ formData, setFormData }) {
  return (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="name">Name</Label>
      <Input
        type="text"
        id="name"
        placeholder="Your Name"
        value={formData.name}
        onChange={(event) =>
          setFormData({
            ...formData,
            name: event.target.value,
          })
        }
      />
    </div>
  );
}

export default Name;
