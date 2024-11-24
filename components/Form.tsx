"use client";
import React, { useState } from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button"
// import {
//   IconBrandGithub,
//   IconBrandGoogle,
//   IconBrandOnlyfans,
// } from "@tabler/icons-react";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "@/components/ui/popover";
  import { Check, ChevronsUpDown } from "lucide-react";
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
  } from "@/components/ui/Command"
import { IconDeviceIpadX } from "@tabler/icons-react";

  const symptoms = [
    "Abdominal Pain",
    "Blurred Vision",
    "Breathing Issues",
    "Chest Pain",
    "Chewing Difficulty",
    "Coughing",
    "Coughing, Wheezing",
    "Diarrhea",
    "Diarrhea, Vomiting",
    "Dry Skin",
    "Eye Redness",
    "Fatigue",
    "Fatigue, Abdominal Pain",
    "Frequent Urination",
    "Head Shaking, Itching",
    "Joint Pain",
    "Joint Stiffness",
    "Nausea, Vomiting",
    "None",
    "Obesity-related Issues",
    "Pain, Swelling",
    "Rashes, Itching",
    "Redness, Itching",
    "Seizures, Tremors",
    "Stiffness, Pain",
    "Swelling",
    "Swelling, bruising",
    "Vomiting",
    "Weakness, Fatigue",
    "Weight Gain",
    "Weight Loss",
    "Weight Loss, Fatigue",
    "Yellowing Eyes, Fatigue",
  ];

export function Form() {

const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  console.log("Form submitted");
};
    // List of symptoms for combobox

  return (
    <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
      <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
        Welcome to Vet Analyzer
      </h2>
      <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
        Enter Data to get Brilliant Output which save animal
      </p>

      <form className="my-8" onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <LabelInputContainer>
            <Label htmlFor="firstname">Animal Name</Label>
            <Input id="firstname" placeholder="Lion" type="text" />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="lastname">Animal Age</Label>
            <Input id="lastname" placeholder="15" type="text" />
          </LabelInputContainer>
        </div>
        {/* <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Symptoms</Label>
          <Input id="email" placeholder="projectmayhem@fc.com" type="email" />
        </LabelInputContainer> */}
        {/* <LabelInputContainer className="mb-4">
          <Label htmlFor="password">Password</Label>
          <Input id="password" placeholder="••••••••" type="password" />
        </LabelInputContainer> */}
        {/* <LabelInputContainer className="mb-8">
          <Label htmlFor="twitterpassword">Your twitter password</Label>
          <Input
            id="twitterpassword"
            placeholder="••••••••"
            type="twitterpassword"
          />
        </LabelInputContainer> */}
        {/* <div className="flex flex-col space-y-1.5">
              <Label htmlFor="framework">Symptoms</Label>
              <Select>
                <SelectTrigger id="framework">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="next">Abdominal Pain</SelectItem>
                  <SelectItem value="sveltekit">Blurred Vision</SelectItem>
                  <SelectItem value="astro">Breathing Issues</SelectItem>
                  <SelectItem value="astro">Chest Pain</SelectItem>
                  <SelectItem value="nuxt">Chewing Difficulty</SelectItem>
                  <SelectItem value="nuxt">Coughing</SelectItem>
                  <SelectItem value="nuxt">Coughing, Wheezing</SelectItem>
                  <SelectItem value="nuxt">Diarrhea</SelectItem>
                  <SelectItem value="nuxt">Diarrhea, Vomiting</SelectItem>
                  <SelectItem value="nuxt">Dry Skin</SelectItem>
                  <SelectItem value="nuxt">Eye Redness</SelectItem>
                  <SelectItem value="nuxt">Fatigue</SelectItem>
                  <SelectItem value="nuxt">Fatigue, Abdominal Pain</SelectItem>
                  <SelectItem value="nuxt">Frequent Urination</SelectItem>
                  <SelectItem value="nuxt">Head Shaking, Itching</SelectItem>
                  <SelectItem value="nuxt">Joint Pain</SelectItem>
                  <SelectItem value="nuxt">Joint Stiffness</SelectItem>
                  <SelectItem value="nuxt">Nausea, Vomiting</SelectItem>
                  <SelectItem value="nuxt">None</SelectItem>
                  <SelectItem value="nuxt">Obesity-related Issues</SelectItem>
                  <SelectItem value="nuxt">Pain, Swelling</SelectItem>
                  <SelectItem value="nuxt">Rashes, Itching</SelectItem>
                  <SelectItem value="nuxt">Redness,Itching</SelectItem>
                  <SelectItem value="nuxt">Seizures, Tremors</SelectItem>
                  <SelectItem value="nuxt">Stiffness, Pain</SelectItem>
                  <SelectItem value="nuxt">Swelling</SelectItem>
                  <SelectItem value="nuxt">Swelling, bruising</SelectItem>
                  <SelectItem value="nuxt">Vomiting</SelectItem>
                  <SelectItem value="nuxt">Weakness, Fatigue</SelectItem>
                  <SelectItem value="nuxt">Weight Gain</SelectItem>
                  <SelectItem value="nuxt">Weight Loss</SelectItem>
                  <SelectItem value="nuxt">Weight Loss, Fatigue</SelectItem>
                  <SelectItem value="nuxt">Yellowing Eyes, Fatigue</SelectItem>
                </SelectContent>
              </Select>
        </div> */}
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Symptoms</Label>
          <ComboboxDemo />
        </LabelInputContainer>
        <br />
        <br />
        

        <button
          className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          type="submit"
        >
          Sign up &rarr;
          <BottomGradient />
        </button>

        <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />

        <div className="flex flex-col space-y-4">
          {/* <button
            className=" relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
            type="submit"
          >
            <IconBrandGithub className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
            <span className="text-neutral-700 dark:text-neutral-300 text-sm">
              GitHub
            </span>
            <BottomGradient />
          </button> */}
          {/* <button
            className=" relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
            type="submit"
          >
            <IconBrandGoogle className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
            <span className="text-neutral-700 dark:text-neutral-300 text-sm">
              Google
            </span>
            <BottomGradient />
          </button> */}
          {/* <button
            className=" relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
            type="submit"
          >
            <IconBrandOnlyfans className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
            <span className="text-neutral-700 dark:text-neutral-300 text-sm">
              OnlyFans
            </span>
            <BottomGradient />
          </button> */}
        </div>
      </form>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};


export function ComboboxDemo() {
    const [open, setOpen] = React.useState(false);
    const [value, setValue] = React.useState("");
    const [symptomSelected,setsymptomSelected] = useState([]);

    const handlesymptomSelection = (e:string) => {
      setsymptomSelected((prevText)=>[...prevText,e]);
      console.log(symptomSelected)
    }
  
    return (
      <>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-[200px] justify-between"
          >
            {value ? value : "Select symptom..."}
            <ChevronsUpDown className="opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[200px] p-0">
          <Command>
            <CommandInput placeholder="Search symptoms..." />
            <CommandList>
              <CommandEmpty>No symptom found.</CommandEmpty>
              <CommandGroup>
                {symptoms.map((symptom) => (
                  <CommandItem
                    key={symptom}
                    value={symptom}
                    onSelect={(currentValue) => {
                      setValue(currentValue === value ? "" : currentValue);
                      setOpen(false);
                      handlesymptomSelection(currentValue)
                    }}
                    
                  >
                    {symptom}
                    <Check
                    onClick={()=>{console.log("object is this ")}}
                      className={cn(
                        "ml-auto",
                        value === symptom ? "opacity-100" : "opacity-0"
                      )}
                    />
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
      <div className="flex flex-wrap w-full">
      {symptomSelected.map((symptom,index) => (
        <div key={index} className="text-lg">
          <div>
            {symptom}
          </div>
        </div>
      ))}
      </div>
  </>
    );
  }