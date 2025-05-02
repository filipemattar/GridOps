import { Button } from "./ui/button";
import { Download } from "lucide-react";

export function DownloadButton() {
  async function fetchDocument() {
    const response = await fetch("http://localhost:3000/download");

    const blob = await response.blob();

    const url = window.URL.createObjectURL(blob);

    const element = document.createElement("a");

    element.href = url;

    element.download = "brazil_energy_output.json";

    document.body.appendChild(element);

    element.click();

    window.URL.revokeObjectURL(url);
  }

  const handleDownloadClick = () => {
    fetchDocument();
  };

  return (
    <Button
      className="h-[50px] w-[200px] text-stone-500 cursor-pointer border-2 hover:bg-[#1DC75A] hover:border-[#1DC75A] hover:text-stone-700 transition-all duration-150 ease-in-out hover:scale-105"
      variant="outline"
      size="icon"
      onClick={handleDownloadClick}
    >
      <Download className="h-[50px] w-[50px]" /> Download National Data
    </Button>
  );
}
