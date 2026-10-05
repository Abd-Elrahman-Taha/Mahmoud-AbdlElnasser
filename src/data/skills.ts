import type { SkillCategory, ToolItem } from '../types';

export const skillsData: SkillCategory[] = [
  {
    title: 'Digital Design',
    badge: 'RTL_CORE',
    skills: [
      'Verilog HDL',
      'Combinational Logic',
      'Sequential Logic',
      'FSMs (Finite State Machines)',
      'Memory Modules',
      'Logic Synthesis',
      'RTL Linting',
      'Static Timing Analysis (STA)',
      'CDC / RDC',
      'Low Power Design',
      'FPGA Implementation'
    ]
  },
  {
    title: 'Digital Verification',
    badge: 'UVM_VERIF',
    skills: [
      'SystemVerilog',
      'Verification Plans',
      'Constrained-Random Stimulus',
      'Functional Coverage',
      'Code Coverage',
      'SystemVerilog Assertions (SVA)',
      'Object-Oriented Programming (OOP)',
      'Formal Verification',
      'UVM (Universal Verification Methodology)',
      'TLM (Transaction-Level Modeling)',
      'Sequences & Sequencers',
      'Factory Registration',
      'Virtual Sequences',
      'Virtual Sequencers',
      'Active / Passive UVM Agents'
    ]
  },
  {
    title: 'Programming & Scripting',
    badge: 'AUTOMATION_LANG',
    skills: [
      'C',
      'C++',
      'Python',
      'MATLAB',
      'TCL Scripting',
      'Bash Scripting'
    ]
  }
];

export const toolsData: ToolItem[] = [
  {
    name: 'Questa-Sim',
    category: 'Simulation & Verification',
    description: 'Advanced RTL & gate-level digital simulation, coverage analysis, and mixed-language debugging.',
    badge: 'SIM_ENGINE'
  },
  {
    name: 'Questa-Formal',
    category: 'Formal Verification',
    description: 'Property checking, assertion-based formal proof, and model checking verification.',
    badge: 'FORMAL_PROOF'
  },
  {
    name: 'Xilinx Vivado',
    category: 'FPGA Design & Implementation',
    description: 'RTL synthesis, PnR, bitstream generation, timing closure, and ILA on Xilinx/AMD platforms.',
    badge: 'FPGA_SYNTH'
  },
  {
    name: 'Intel Quartus',
    category: 'FPGA Design Flow',
    description: 'Cyclone FPGA compilation, TimeQuest timing analysis, and hardware programming.',
    badge: 'INTEL_FPGA'
  },
  {
    name: 'MATLAB',
    category: 'Algorithmic Modeling',
    description: 'Mathematical golden reference modeling, DSP algorithm validation, and signal processing verification.',
    badge: 'GOLDEN_REF'
  },
  {
    name: 'Proteus',
    category: 'Electronic Circuit Simulation',
    description: 'Schematic capture, PCB design, and SPICE-level electronic circuit simulation.',
    badge: 'CIRCUIT_SIM'
  },
  {
    name: 'C++',
    category: 'Systems & Testbench Dev',
    description: 'Hardware modeling, algorithmic testbench generation, and computational logic.',
    badge: 'SYSTEM_LANG'
  },
  {
    name: 'TCL Shell',
    category: 'EDA Automation',
    description: 'Scripting tool flows, constraint automation, synthesis scripts, and EDA batch runs.',
    badge: 'EDA_SCRIPT'
  }
];
