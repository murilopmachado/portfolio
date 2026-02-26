import React from "react";

const INFO = {
	main: {
		title: "Murilo Machado — MLOps | Platform Engineer | DevSecOps",
		name: "Murilo Machado",
		email: "murilo.paula.machado@gmail.com",
		logo: "murilo_avatar.png",
	},

	socials: {
		github: "https://github.com/murilopmachado",
		linkedin: "https://www.linkedin.com/in/murilomachado/",
	},

	homepage: {
		title: "MLOps, Platform Engineer & DevSecOps, building secure AI infrastructure on-premise.",
		description:
			"With 15+ years of IT experience, my career has evolved from Software Development, QA, and Pentesting to scaling my own physical IT training school into a successful consultancy. Today I architect secure on-premise GPU clusters (DGX), deploy LLM hosting solutions (vLLM, Open WebUI), and build open-source synthetic data pipelines, leveraging my deep foundation in cloud-native infrastructure and secure SDLC to deliver production-ready AI environments. Recently, I secured a FULL WBSO grant from the Netherlands Enterprise Agency (RVO) for 3,000 R&D hours in AI.",
	},

	about: {
		title: "Hey, I'm Murilo Machado — born in Brazil, living in the Netherlands.",
		description:
			"I turn infrastructure complexity into competitive advantage. With 15+ years across QA, Pentesting, DevSecOps, and Platform Engineering, I specialise in MLOps at scale — designing secure on-premise GPU clusters, deploying production LLM stacks, and engineering synthetic data pipelines from the ground up. I've grown and sold a technical training company, led enterprise security programmes across Fintech and Retail, and recently secured a full WBSO R&D grant for 3,000h of applied AI research.",
		cta:
			"If I can be of service to your project, or if you are building something where you think your services could benefit me, I'd love to connect. (Note: I am not looking for offshore or outsourced engineering agencies.)",
	},

	articles: {
		title: "Pushing the boundaries of AI infrastructure, security, and synthetic data generation.",
		description:
			"Thoughts on MLOps, Platform Engineering, DevSecOps, AI R&D, and the intersection of security and modern infrastructure.",
	},

	projects: [
		{
			title: "Quail — AI Platform @ spriteCloud",
			description:
				"Private LLM platform built for a software testing consultancy. Architected the full stack: NVIDIA DGX Spark setup, multi-model hosting (Ollama, vLLM), Firecrawl, Qdrant, Open WebUI, and Netbird-secured networking. Designed the synthetic data pipeline for training a domain-specific testing model, implemented ISO 27001 controls, ran threat modelling (DFDs, attack trees), and delivered the full CI/CD and secrets pipeline. WBSO-funded R&D project.",
			logo: "quail.png",
			category: "venture",
			startYear: 2024,
			endYear: null,
			clients: [
				{ name: "spriteCloud", logo: "spritecloud.png" },
			],
		},

		{
			title: "Offensive Security & Penetration Testing",
			description: (
				<React.Fragment>
					<p>
						<strong>Security Researcher (Private & spriteCloud)</strong>
						<br />
						Extensive experience conducting black-box and gray-box penetration tests for high-compliance clients (Government, Fintech, Retail), following PTES standards. Utilizing modern scanners (Caido, Burp Suite, Naabu, DeepHat AI) and custom Python exploit chains to deeply map attack surfaces and uncover whatever vulnerabilities are present. Notable cases include discovering and remediating critical ATOs and Privilege Escalation vectors in enterprise infrastructure.
					</p>
					<p>
						<strong>Elite Network of Brazilian Security Researchers</strong>
						<br />
						Beyond securing web, backend, and SaaS environments myself, I maintain a trusted network of elite security researchers in Brazil. Whether you need a solo pentester or a specialized team to comprehensively test e-commerce platforms, IoT devices, or hardware, I can assemble the right talent for your project.
					</p>
				</React.Fragment>
			),
			logo: "https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/72x72/1f575.png",
			category: "venture",
			startYear: 2019,
			endYear: "Present",
			clients: [
				{ name: "spriteCloud", logo: "spritecloud.png" },
				{ name: "Nubank", logo: "Nubank_logo.svg" },
				{ name: "Neon", logo: "Neon_logo_2021.png" },
				{ name: "PagSeguro", logo: "Logonovo_pagseguro-cinza.png" },
				{ name: "Natura", logo: "natura.png" },
				{ name: "PicPay", logo: "picpay-1.svg" },
				{ name: "Suzano", logo: "suzano.png" },
				{ name: "Melitta", logo: "melitta.svg" },
				{ name: "Instituto Oswaldo Cruz", logo: "oswaldo_cruz.png" },
				{ name: "Folha de S.Paulo", logo: "folha_logo.png" },
			],
			isPublic: false,
			linkText: null,
			link: null,
		},

		{
			title: "VilasBoas — IT Academy & Consultancy",
			description:
				"Founded an IT training operation in Brazil from the ground up, developing 2,000+ engineers across QA, development, and infrastructure — then scaled it into VilasBoas, a technology consultancy serving enterprise clients across retail, fintech, and telco.",
			logo: "https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/72x72/1f393.png",
			category: "venture",
			startYear: 2016,
			endYear: 2018,
			clients: [
				{ name: "AB-InBev", logo: "abinbev.webp" },
				{ name: "Nextel", logo: "nextel.svg" },
				{ name: "Via", logo: "via.png" },
				{ name: "CVC", logo: "cvc.webp" },
				{ name: "Magalu", logo: "magalu.png" },
				{ name: "Evino", logo: "evino.png" },
			],
		},

		{
			title: "aigate — AI Security Sandbox",
			description:
				"OS-level sandbox in Go for AI coding agents (Claude Code, Cursor, Copilot). Kernel-enforced file, process, and network isolation via Linux mount namespaces, POSIX ACLs, and cgroups v2. Ensures GDPR/ISO compliance during AI-assisted development.",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/go/go.png",
			category: "technical",
			isPublic: true,
			linkText: "View on GitHub",
			link: "https://github.com/murilopmachado",
		},

		{
			title: "SpecHammer — Kubernetes Testing",
			description:
				"Internal Go-based validation framework for Kubernetes Kustomize and Helm manifests. Tests infrastructure-as-code against custom YAML assertions to enforce security, performance, and compliance policies pre-deployment.",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/go/go.png",
			category: "technical",
			isPublic: false,
			linkText: null,
			link: null,
		},

		{
			title: "yankrun — Templating Engine",
			description:
				"CLI scaffolding tool for secure repository cloning and dynamic template value replacement, with customizable delimiters, size-based parsing limits, and built-in transformation functions.",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/go/go.png",
			category: "technical",
			isPublic: true,
			linkText: "View on GitHub",
			link: "https://github.com/murilopmachado",
		},

		{
			title: "structlint — CI/CD Linter",
			description:
				"Internal Go-based CLI tool that validates directory structures and file naming conventions inside CI/CD pipelines, creating reliable context boundaries for AI tooling and enforcing project consistency at scale.",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/go/go.png",
			category: "technical",
			isPublic: false,
			linkText: null,
			link: null,
		},

		{
			title: "ParseCraft & pb — CLI Utilities",
			description:
				"Cross-format parser (JSON, YAML, Markdown) leveraging gojq for advanced querying, plus a cross-platform (Linux/macOS/Windows) clipboard CLI utility for terminal piping integrated with X11/Wayland.",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/go/go.png",
			category: "technical",
			isPublic: true,
			linkText: "View on GitHub",
			link: "https://github.com/murilopmachado",
		},

		{
			title: "Pretest — Ruby Testing Library",
			description:
				"Co-authored a Ruby testing library ('pretest' gem) focused on providing an intuitive and fluent interface for assertions and unit testing in Ruby applications.",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/ruby/ruby.png",
			linkText: "View Gem",
			link: "https://rubygems.org/gems/pretest/versions/1.12.0?locale=en",
			category: "technical",
			isPublic: true,
		},
		{
			title: "Topic-Lode: Production AI Dataset Miner",
			description:
				"A production-grade synthetic data generation pipeline for creating high-quality, technically accurate datasets for LLM fine-tuning. Features Knowledge Mining for deep Q&A and Agentic Mode for tool-use/function-calling training.",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/python/python.png",
			linkText: "View on GitHub",
			link: "https://github.com/murilopmachado",
			category: "technical",
			isPublic: true,
		},

		{
			title: "EMTP — Expert Model Training Pipeline",
			description:
				"A comprehensive pipeline for acquiring and preparing QA data for training expert AI models. Uses DuckDuckGo search dorks, Firecrawl API for direct markdown extraction, handles Unicode normalization, and features a clean modular architecture.",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/python/python.png",
			linkText: "View on GitHub",
			link: "https://github.com/murilopmachado",
			category: "technical",
			isPublic: true,
		},

		{
			title: "ReviewForge — AI Code Reviewer",
			description:
				"An AI-powered code reviewer with personality (GitHub Action & CLI). Reviews PRs using OpenAI, Anthropic, or Gemini, posting line-level comments with severity levels, review verdicts, learning reports for developer growth, and customizable reviewer personas.",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/go/go.png",
			linkText: "View on GitHub",
			link: "https://github.com/murilopmachado",
			category: "technical",
			isPublic: true,
		},
	],
};

export default INFO;
