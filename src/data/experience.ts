import type { ExperienceItem } from '../types';

export const experienceData: ExperienceItem[] = [
  {
    id: 'iti-training',
    title: 'ITI Summer Training',
    organization: 'Information Technology Institute (ITI)',
    mentors: 'Eng. Ahmed El Gammal & Eng. Yousef Sherif',
    period: 'July 2026 – September 2026',
    badge: 'FPGA_ASIC_FLOW',
    type: 'FPGA / ASIC',
    content: [
      'Gained hands-on experience with FPGA development using Intel Cyclone FPGA and ZedBoard, covering RTL design and hardware/software co-design.',
      'Performed FPGA prototyping using Xilinx Vivado and Intel Quartus, including synthesis, implementation, timing analysis, and FPGA programming.',
      'Gained hands-on experience with the full ASIC design flow using Synopsys tools, from RTL synthesis through physical design and sign-off stages.',
      'Implemented an ASIC design flow on a 16-bit MIPS processor, I2C and IEEE 802.15.4 CSS PHY Transmitter.'
    ]
  },
  {
    id: 'nti-training',
    title: 'NTI Summer Training',
    organization: 'National Telecommunication Institute (NTI)',
    mentors: 'Eng. Ahmed Husseiny',
    period: 'June 2026 – July 2026',
    badge: 'RTL_STA_PPA',
    type: 'RTL / STA',
    content: [
      'Designed and developed RTL modules using Verilog HDL for combinational and sequential digital logic.',
      'Applied parameterized and modular RTL design using generate blocks and procedural constructs.',
      'Analyzed timing paths, setup/hold constraints, slack, and clock constraints using STA.',
      'Studied VLSI design trade-offs across Performance, Power, and Area (PPA), with emphasis on timing analysis and design constraints.'
    ]
  }
];
