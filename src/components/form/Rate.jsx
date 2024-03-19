import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

function Rate({ formData, setFormData }) {
  const handleRadioChange = (value) => {
    setFormData({ ...formData, rate: value });
  };

  return (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="link">How well are you acquainted with cybersec ?</Label>
      <RadioGroup
        value={formData.cyber}
        defaultValue="option-one"
        onValueChange={handleRadioChange}
      >
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="option-one" id="option-one" />
          <Label htmlFor="option-one">Beginner</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="option-two" id="option-two" />
          <Label htmlFor="option-two">Advanced</Label>
        </div>
      </RadioGroup>
    </div>
  );
}

export default Rate;
