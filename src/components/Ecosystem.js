import React, { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, Box, Torus } from '@react-three/drei';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import './Ecosystem.css';

const RotatingShape = ({ position, shape, color }) => {
  const meshRef = useRef();

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      {shape === 'sphere' && <Sphere args={[0.5, 32, 32]} />}
      {shape === 'box' && <Box args={[0.8, 0.8, 0.8]} />}
      {shape === 'torus' && <Torus args={[0.5, 0.2, 16, 32]} />}
      <meshStandardMaterial color={color} roughness={0.3} metalness={0.8} />
    </mesh>
  );
};

const Scene3D = () => {
  return (
    <Canvas camera={{ position: [0, 0, 8] }}>
      <Suspense fallback={null}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />
        
        <RotatingShape position={[-2, 2, 0]} shape="sphere" color="#6366f1" />
        <RotatingShape position={[2, 2, 0]} shape="box" color="#ec4899" />
        <RotatingShape position={[-2, -2, 0]} shape="torus" color="#14b8a6" />
        <RotatingShape position={[2, -2, 0]} shape="sphere" color="#f59e0b" />
        
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1} />
      </Suspense>
    </Canvas>
  );
};

const ProcessStep = ({ number, title, description, delay }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      className="process-step"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.6, delay }}
      whileHover={{ scale: 1.05, y: -10 }}
    >
      <div className="step-number">{number}</div>
      <h4>{title}</h4>
      <p>{description}</p>
    </motion.div>
  );
};

const Ecosystem = () => {
  const steps = [
    { number: '01', title: 'Detect', description: 'Identify threats in real-time across all channels' },
    { number: '02', title: 'Divert', description: 'Redirect scammers to AI bots' },
    { number: '03', title: 'Disrupt', description: 'Waste scammer time and resources' },
    { number: '04', title: 'Decode', description: 'Extract actionable intelligence' }
  ];

  return (
    <section className="ecosystem">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          The VishShield Ecosystem
        </motion.h2>
        <motion.p
          className="section-subtitle"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          A comprehensive, multi-channel platform designed to actively extract and report on critical scam intelligence
        </motion.p>

        <div className="ecosystem-3d">
          <Scene3D />
        </div>

        <div className="process-steps">
          {steps.map((step, index) => (
            <ProcessStep
              key={index}
              number={step.number}
              title={step.title}
              description={step.description}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Ecosystem;

