# skill-harmonyos-docs

An offline search repository for HarmonyOS development documentation that provides AI-assisted development tools (such as Claude Code Skills, CodeArts Doer, etc.) with the ability to quickly locate structured HarmonyOS development documentation.

## Project Overview

This project crawls and organizes the complete **API 23 (HarmonyOS 6.0)** development documentation from the official HarmonyOS developer documentation site. It covers three core sections: API Reference, Development Guides, and Best Practices, comprising a total of **18,932 documents** with a total content size of approximately **363 MB**.

The core design employs a **two-step retrieval method combining category directories and sub-indexes**: The AI first reads a very small category directory (1–3 KB) to determine the document’s category, then retrieves the corresponding sub-index as needed for precise location, avoiding the need to load large files all at once and significantly reducing token consumption.

## Documentation Statistics

Section                               Number of Documents     Size     Description
API Reference (api/)                           7,600          174 MB   ArkTS API, C API, and component interface definitions
Development Guides (guides/)                   10,380         165 MB   Development guidance for application frameworks, system services, media and graphics, etc.
Best Practices (best/)                            860          22 MB   Practical solutions for performance optimization, stability, power consumption, layout, etc.
Release Notes (releases/)                          92         1.8 MB   API change logs, platform behavior change notes
Total                                          18,932        ~363 MB 	


## Directory Structure

```
skill-harmonyos-docs/
├── README.md                   # This file
├── SKILL.md                    # Skill definition (trigger conditions, retrieval workflow)
├── INDEX.md                    # Main index entry
├── api/                        # API reference documentation
│   ├── QUICK_INDEX.md          # Category index (~2 KB, first-step search entry)
│   ├── QUICK_ENTRY.md          # Quick entry (direct mapping from API name to path)
│   ├── _index/                 # Categorized sub-index (Step 2: Precise location)
│   │   ├── ArkUI Components.md        # 329 entries
│   │   ├── ArkUI_API.md        # 72 entries
│   │   ├── Application Services.md         # 159 entries
│   │   └── ...
│   ├── index.md                # Hierarchical navigation entry point (alternative option)
│   └── Application Framework/System/AI/...    # Original documentation, organized by Kit/module
├── guides/                     # Development guide documentation
│   ├── QUICK_INDEX.md          # Category index (~2 KB)
│   ├── _index/                 # Sub-indexes
│   │   ├── 01.md ~ 19.md      # Numbered sub-indexes
│   │   └── ...
│   ├── index.md                # Hierarchical navigation entry point
│   └

Translated with DeepL.com (free version)
