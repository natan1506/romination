import { consoles } from "./options.ts";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectLabel,
  SelectItem,
} from "@/components/ui/select.tsx";
import { useState } from "react";
import { Loader2Icon } from "lucide-react";

export function Initial() {
  const [valueConsole, setValueConsole] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  function handleChangeValue(e: string) {
    console.log(e);
    setValueConsole(e);
    setLoading(true);

    // scrapeConsoleGames('Super Nintendo').then(roms => {
    //   console.log('ROMs disponíveis:', roms);
    // });
  }

  if (loading) {
    return (
      <div className="flex flex-col h-screen items-center justify-center">
        <Loader2Icon className="animate-spin" />
      </div>
    );
  }

  function handleSelectedConsole(con: string) {
    console.log(con);
  }

  return (
    <div className="flex flex-col h-screen">
      <div className="border-b p-3 flex items-center justify-between gap-3">
        <h1>romation</h1>
        <div>
          <Select onValueChange={handleChangeValue}>
            <SelectTrigger>
              <SelectValue placeholder="Select a console" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Consoles</SelectLabel>
                {consoles.map((console) => (
                  <SelectItem key={console.id} value={console.search}>
                    {console.name}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
      <main className="flex flex-1">
        <div className="border-r p-3 flex flex-col overflow-auto gap-2">
          {consoles.map((console) => (
            <div key={console.id}>
              <button onClick={() => handleSelectedConsole(console.search)}>
                {console.name}
              </button>
            </div>
          ))}
        </div>
        <div></div>
      </main>
    </div>
  );
}
