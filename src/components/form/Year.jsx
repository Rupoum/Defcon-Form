import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function Year({ formData, setFormData }) {
  const handleYearChange = (e) => {
    console.log("abcd");
    setFormData({ ...formData, Year: e.target.value });
  };

  return (
    <Select value={formData.selectedYear} onValueChange={handleYearChange}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select your current year" />
      </SelectTrigger>
      <SelectContent>
        {[1, 2, 3, 4].map((year) => {
          return (
            <SelectItem key={year} value={year.toString()}>
              Year {year}
            </SelectItem>
          );
        })}
      </SelectContent>
    </Select>
  );
}

export default Year;
