"use client";

import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";
import * as React from "react";

import { Button } from "@/components/ui/button";

export function ModeToggle() {
	const { setTheme, theme } = useTheme();
	return (
		<>
			<div className="absolute top-0 right-0 z-50 m-2">
				<Button
					variant="outline"
					size="icon"
					onClick={() => {
						theme === "dark" ? setTheme("light") : setTheme("dark");
					}}
				>
					<SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
					<MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
					<span className="sr-only">Toggle theme</span>
				</Button>
			</div>
		</>
	);
}
