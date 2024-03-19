import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

function Mail({ formData, setFormData }) {
  return (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="email">Email</Label>
      <Input
        type="email"
        id="email"
        placeholder="Email"
        value={formData.email}
        onChange={(event) =>
          setFormData({
            ...formData,
            email: event.target.value,
          })
        }
      />
    </div>
  );
}

export default Mail;
