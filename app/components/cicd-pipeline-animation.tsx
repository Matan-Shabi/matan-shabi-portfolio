"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { Code, Package, TestTube, Rocket, BarChart, Shield, GitBranch, Check, X, AlertTriangle } from "lucide-react"

interface PipelineStage {
  id: string
  name: string
  icon: React.ReactNode
  status: "pending" | "running" | "success" | "failed" | "warning"
  logs: string[]
  duration?: number
}

export default function CICDPipelineAnimation() {
  const [activeStage, setActiveStage] = useState<string | null>(null)
  const [pipelineRunning, setPipelineRunning] = useState(false)
  const [pipelineComplete, setPipelineComplete] = useState(false)
  const [currentLogIndex, setCurrentLogIndex] = useState(0)
  const [autoScroll, setAutoScroll] = useState(true)
  const [showCodeSnippet, setShowCodeSnippet] = useState(false)
  const [deploymentProgress, setDeploymentProgress] = useState(0)
  const [showSecurityAlert, setShowSecurityAlert] = useState(false)
  const [pipelineNumber, setPipelineNumber] = useState<number | null>(null)
  const [isHydrated, setIsHydrated] = useState(false)

  const logContainerRef = useRef<HTMLDivElement>(null)
  const pipelineRef = useRef<HTMLDivElement>(null)
  const animationRef = useRef<number>(0)

  // Generate random pipeline number after hydration
  useEffect(() => {
    setPipelineNumber(Math.floor(Math.random() * 1000))
    setIsHydrated(true)
  }, [])

  // Initial pipeline stages
  const [stages, setStages] = useState<PipelineStage[]>([
    {
      id: "code",
      name: "Code",
      icon: <Code size={20} />,
      status: "pending",
      logs: [
        "$ git checkout -b feature/new-auth-system",
        "Switched to a new branch 'feature/new-auth-system'",
        "$ git add .",
        "$ git commit -m 'Implement JWT authentication'",
        "[feature/new-auth-system 3a7c2d1] Implement JWT authentication",
        "5 files changed, 120 insertions(+), 25 deletions(-)",
        "$ git push origin feature/new-auth-system",
        "Enumerating objects: 15, done.",
        "Counting objects: 100% (15/15), done.",
        "Delta compression using up to 8 threads",
        "Compressing objects: 100% (8/8), done.",
        "Writing objects: 100% (8/8), 1.22 KiB | 1.22 MiB/s, done.",
        "Total 8 (delta 6), reused 0 (delta 0), pack-reused 0",
        "remote: Resolving deltas: 100% (6/6), completed with 6 local objects.",
        "remote: Create pull request for feature/new-auth-system:",
        "remote: https://github.com/Matan-Shabi/project/pull/42",
        "To github.com:Matan-Shabi/project.git",
        " * [new branch]      feature/new-auth-system -> feature/new-auth-system",
        "Pull request #42 created successfully",
        "Code review requested from team members",
        "Linting code with ESLint...",
        "ESLint: ✓ 0 problems (0 errors, 0 warnings)",
        "Running code formatting with Prettier...",
        "Prettier: All files formatted successfully",
      ],
      duration: 8,
    },
    {
      id: "build",
      name: "Build",
      icon: <Package size={20} />,
      status: "pending",
      logs: [
        "$ docker build -t myapp:latest .",
        "Sending build context to Docker daemon  42.5MB",
        "Step 1/12 : FROM node:18-alpine AS base",
        "base: Pulling from library/node",
        "31e352740f53: Pull complete",
        "a1e7033f082e: Pull complete",
        "3af14c9a24c9: Pull complete",
        "Digest: sha256:a1f9d027912b58a7c75be7716c97cfbc6d3099f3a97ed84aa490be9dee20e787",
        "Status: Downloaded newer image for node:18-alpine",
        " ---> 7f9c6fa89822",
        "Step 2/12 : WORKDIR /app",
        " ---> Running in 3a2f7b5c9e4d",
        " ---> 9d3c8f2c6934",
        "Step 3/12 : COPY package*.json ./",
        " ---> 6d3fc8b9a7e2",
        "Step 4/12 : RUN npm ci",
        " ---> Running in 7d9e8f2c6a34",
        "added 1425 packages in 25s",
        " ---> 3f9c7d8e5b21",
        "Step 5/12 : COPY . .",
        " ---> 2d8e9f7c6b43",
        "Step 6/12 : RUN npm run build",
        " ---> Running in 1a2b3c4d5e6f",
        "Creating an optimized production build...",
        "Compiled successfully.",
        " ---> 8e7d6c5f4a32",
        "Step 7/12 : FROM node:18-alpine AS runner",
        " ---> 7f9c6fa89822",
        "Step 8/12 : WORKDIR /app",
        " ---> Using cache",
        " ---> 9d3c8f2c6934",
        "Step 9/12 : COPY --from=base /app/node_modules ./node_modules",
        " ---> Using cache",
        " ---> 5e6f4d3c2b1a",
        "Step 10/12 : COPY --from=base /app/.next ./.next",
        " ---> 1b2c3d4e5f6a",
        "Step 11/12 : COPY --from=base /app/public ./public",
        " ---> 7a8b9c0d1e2f",
        'Step 12/12 : CMD ["npm", "start"]',
        " ---> Running in 3e4f5d6c7b8a",
        " ---> 9c8b7a6d5e4f",
        "Successfully built 9c8b7a6d5e4f",
        "Successfully tagged myapp:latest",
        "$ docker tag myapp:latest registry.example.com/myapp:latest",
        "$ docker push registry.example.com/myapp:latest",
        "The push refers to repository [registry.example.com/myapp]",
        "5f6d7e8c9a0b: Pushed",
        "1a2b3c4d5e6f: Pushed",
        "7g8h9i0j1k2l: Pushed",
        "latest: digest: sha256:3a4b5c6d7e8f9g0h1i2j3k4l5m6n7o8p9q0r1s2t3u4v5w6x7y8z9 size: 1234",
      ],
      duration: 15,
    },
    {
      id: "test",
      name: "Test",
      icon: <TestTube size={20} />,
      status: "pending",
      logs: [
        "Running unit tests...",
        "$ jest --coverage",
        "PASS src/components/__tests__/Button.test.tsx",
        "PASS src/components/__tests__/Card.test.tsx",
        "PASS src/utils/__tests__/auth.test.ts",
        "PASS src/utils/__tests__/format.test.ts",
        "PASS src/hooks/__tests__/useAuth.test.ts",
        "FAIL src/services/__tests__/api.test.ts",
        "  ● API Service › should handle network errors",
        "    expect(received).toBe(expected)",
        '    Expected: "Network Error"',
        '    Received: "Request failed with status code 500"',
        "      at Object.<anonymous> (src/services/__tests__/api.test.ts:45:25)",
        "Fixing test...",
        "$ git add src/services/__tests__/api.test.ts",
        "$ git commit -m 'Fix API service test'",
        "[feature/new-auth-system a1b2c3d] Fix API service test",
        "1 file changed, 3 insertions(+), 1 deletion(-)",
        "Running tests again...",
        "$ jest --coverage",
        "PASS src/components/__tests__/Button.test.tsx",
        "PASS src/components/__tests__/Card.test.tsx",
        "PASS src/utils/__tests__/auth.test.ts",
        "PASS src/utils/__tests__/format.test.ts",
        "PASS src/hooks/__tests__/useAuth.test.ts",
        "PASS src/services/__tests__/api.test.ts",
        "Test Suites: 6 passed, 6 total",
        "Tests:       24 passed, 24 total",
        "Snapshots:   0 total",
        "Time:        3.245s",
        "Ran all test suites.",
        "Running integration tests...",
        "$ cypress run",
        "Running 5 integration tests...",
        "  ✓ Authentication flow (1.2s)",
        "  ✓ User profile update (0.8s)",
        "  ✓ Dashboard navigation (0.5s)",
        "  ✓ Form validation (0.7s)",
        "  ✓ API error handling (0.9s)",
        "5 passing (4s)",
        "Running performance tests...",
        "$ lighthouse-ci",
        "Performance: 92/100",
        "Accessibility: 98/100",
        "Best Practices: 100/100",
        "SEO: 100/100",
        "All tests passed successfully!",
      ],
      duration: 12,
    },
    {
      id: "security",
      name: "Security",
      icon: <Shield size={20} />,
      status: "pending",
      logs: [
        "Running security scan...",
        "$ npm audit",
        "found 0 vulnerabilities",
        "Scanning dependencies with Snyk...",
        "Testing /app...",
        "Tested 1425 dependencies for known issues, found 1 high severity vulnerability",
        "✗ High severity vulnerability found in axios@0.21.1",
        "  Description: Server-Side Request Forgery (SSRF)",
        "  Info: https://security.snyk.io/vuln/SNYK-JS-AXIOS-1038255",
        "  Introduced through: axios@0.21.1",
        "  Remediation: Upgrade to axios@0.21.2",
        "Fixing vulnerability...",
        "$ npm install axios@0.21.2",
        "added 1 package, removed 1 package, changed 0 packages in 2s",
        "Running security scan again...",
        "$ npm audit",
        "found 0 vulnerabilities",
        "Scanning dependencies with Snyk...",
        "Testing /app...",
        "Tested 1425 dependencies for known issues, no issues found.",
        "Running container security scan...",
        "$ trivy image registry.example.com/myapp:latest",
        "2023-05-15T10:31:25.000+0000 INFO Detected OS: alpine",
        "2023-05-15T10:31:25.000+0000 INFO Scanning for vulnerabilities...",
        "registry.example.com/myapp:latest (alpine 3.16.0)",
        "======================================",
        "Total: 0 (HIGH: 0, CRITICAL: 0)",
        "Running SAST analysis...",
        "$ semgrep --config=p/owasp-top-ten",
        "running 142 rules...",
        "100%|██████████| 142/142 [00:12<00:00, 11.83rules/s]",
        "No findings.",
        "Security scan completed successfully!",
      ],
      duration: 10,
    },
    {
      id: "deploy",
      name: "Deploy",
      icon: <Rocket size={20} />,
      status: "pending",
      logs: [
        "Preparing deployment to production...",
        "$ kubectl get nodes",
        "NAME                                STATUS   ROLES    AGE     VERSION",
        "ip-10-0-1-20.ec2.internal          Ready    <none>   92d     v1.25.6-eks-48e63af",
        "ip-10-0-1-21.ec2.internal          Ready    <none>   92d     v1.25.6-eks-48e63af",
        "ip-10-0-1-22.ec2.internal          Ready    <none>   92d     v1.25.6-eks-48e63af",
        "Updating deployment configuration...",
        "$ kubectl apply -f k8s/deployment.yaml",
        "deployment.apps/myapp configured",
        "$ kubectl apply -f k8s/service.yaml",
        "service/myapp configured",
        "$ kubectl apply -f k8s/ingress.yaml",
        "ingress.networking.k8s.io/myapp configured",
        "Waiting for deployment to roll out...",
        "$ kubectl rollout status deployment/myapp",
        'Waiting for deployment "myapp" rollout to finish: 0 of 3 updated replicas are available...',
        'Waiting for deployment "myapp" rollout to finish: 1 of 3 updated replicas are available...',
        'Waiting for deployment "myapp" rollout to finish: 2 of 3 updated replicas are available...',
        'deployment "myapp" successfully rolled out',
        "Checking deployment status...",
        "$ kubectl get pods -l app=myapp",
        "NAME                     READY   STATUS    RESTARTS   AGE",
        "myapp-7d8f9c6b5-2x3y4    1/1     Running   0          45s",
        "myapp-7d8f9c6b5-5z6a7    1/1     Running   0          30s",
        "myapp-7d8f9c6b5-8b9c0    1/1     Running   0          15s",
        "Running smoke tests on production...",
        "$ curl -s https://api.example.com/health | jq",
        "{",
        '  "status": "ok",',
        '  "version": "1.5.2",',
        '  "uptime": 42',
        "}",
        "Deployment completed successfully!",
        "Application is now live at https://example.com",
      ],
      duration: 18,
    },
    {
      id: "monitor",
      name: "Monitor",
      icon: <BarChart size={20} />,
      status: "pending",
      logs: [
        "Setting up monitoring alerts...",
        "$ helm upgrade --install prometheus-stack prometheus-community/kube-prometheus-stack",
        'Release "prometheus-stack" has been upgraded. Happy Helming!',
        "Configuring Grafana dashboards...",
        'Dashboard "Node Exporter / USE Method / Node" created with ID 1860',
        'Dashboard "Kubernetes / API server" created with ID 1861',
        'Dashboard "Application Overview" created with ID 1862',
        "Setting up log aggregation...",
        "$ kubectl apply -f logging/fluentd-config.yaml",
        "configmap/fluentd-config created",
        "$ kubectl apply -f logging/fluentd-daemonset.yaml",
        "daemonset.apps/fluentd created",
        "Configuring Elasticsearch indices...",
        'index pattern "kubernetes-*" created',
        'index pattern "application-*" created',
        "Setting up uptime monitoring...",
        "$ kubectl apply -f monitoring/uptime-cronjob.yaml",
        "cronjob.batch/uptime-check created",
        "Configuring alert notifications...",
        "Slack webhook configured for critical alerts",
        "Email notifications configured for warning alerts",
        "PagerDuty integration configured for urgent issues",
        "Checking initial metrics...",
        "CPU Usage: 12%",
        "Memory Usage: 45%",
        "Disk I/O: 5MB/s",
        "Network I/O: 10MB/s",
        "Response Time: 120ms",
        "Error Rate: 0.01%",
        "Monitoring setup completed successfully!",
        "All systems operational and being monitored",
      ],
      duration: 14,
    },
  ])

  // Code snippet to display
  const codeSnippet = `// JWT Authentication Middleware
import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';

// Secret key stored securely in configuration
const JWT_SECRET = 'stored-securely-in-environment-variables';

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization?.split(' ')[1];
  
  if (!token) {
    return res.status(401).json({ message: 'Authentication required' });
  }
  
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Invalid token' });
  }
};`

  // Start the pipeline animation
  useEffect(() => {
    let currentStageIndex = 0
    let logTimer: NodeJS.Timeout

    const runPipeline = () => {
      setPipelineRunning(true)

      const runStage = (stageIndex: number) => {
        if (stageIndex >= stages.length) {
          setPipelineRunning(false)
          setPipelineComplete(true)
          return
        }

        const stage = stages[stageIndex]
        setActiveStage(stage.id)

        // Update stage status to running
        setStages((prevStages) => prevStages.map((s, idx) => (idx === stageIndex ? { ...s, status: "running" } : s)))

        // Show security alert during security stage
        if (stage.id === "security") {
          setTimeout(
            () => {
              setShowSecurityAlert(true)
              setTimeout(() => setShowSecurityAlert(false), 5000)
            },
            (stage.duration! * 1000) / 3,
          )
        }

        // Show code snippet during code stage
        if (stage.id === "code") {
          setTimeout(() => {
            setShowCodeSnippet(true)
            setTimeout(() => setShowCodeSnippet(false), 6000)
          }, 2000)
        }

        // Simulate deployment progress
        if (stage.id === "deploy") {
          const progressInterval = setInterval(() => {
            setDeploymentProgress((prev) => {
              const newProgress = prev + 100 / (stage.duration! * 5)
              return newProgress > 100 ? 100 : newProgress
            })
          }, 200)

          setTimeout(() => {
            clearInterval(progressInterval)
            setDeploymentProgress(0)
          }, stage.duration! * 1000)
        }

        // Display logs progressively
        let logIndex = 0
        setCurrentLogIndex(0)

        logTimer = setInterval(
          () => {
            if (logIndex < stage.logs.length) {
              setCurrentLogIndex(logIndex)
              logIndex++
            } else {
              clearInterval(logTimer)

              // Mark stage as complete after all logs are shown
              setTimeout(() => {
                setStages((prevStages) =>
                  prevStages.map((s, idx) => (idx === stageIndex ? { ...s, status: "success" } : s)),
                )

                // Move to next stage
                currentStageIndex++
                runStage(currentStageIndex)
              }, 1000)
            }
          },
          (stage.duration! * 1000) / stage.logs.length,
        )
      }

      // Start with the first stage
      runStage(currentStageIndex)
    }

    // Start the pipeline after a short delay
    const timer = setTimeout(() => {
      runPipeline()
    }, 1500)

    // Cleanup
    return () => {
      clearTimeout(timer)
      clearInterval(logTimer)
    }
  }, [])

  // Auto-scroll logs
  useEffect(() => {
    if (autoScroll && logContainerRef.current) {
      logContainerRef.current.scrollTop = logContainerRef.current.scrollHeight
    }
  }, [currentLogIndex, autoScroll])

  // Draw pipeline flow animation
  useEffect(() => {
    const canvas = document.createElement("canvas")
    const container = pipelineRef.current
    if (!container) return

    container.appendChild(canvas)
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = container.clientWidth
      canvas.height = container.clientHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Animation function
    const animate = () => {
      if (!ctx || !pipelineRunning) return

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw flowing particles along the pipeline
      const stageElements = Array.from(container.querySelectorAll(".pipeline-stage"))

      if (stageElements.length > 1) {
        for (let i = 0; i < stageElements.length - 1; i++) {
          const currentStage = stageElements[i].getBoundingClientRect()
          const nextStage = stageElements[i + 1].getBoundingClientRect()

          const startX = currentStage.left + currentStage.width / 2 - container.getBoundingClientRect().left
          const startY = currentStage.top + currentStage.height / 2 - container.getBoundingClientRect().top
          const endX = nextStage.left + nextStage.width / 2 - container.getBoundingClientRect().left
          const endY = nextStage.top + nextStage.height / 2 - container.getBoundingClientRect().top

          // Draw connection line
          ctx.beginPath()
          ctx.strokeStyle = "#4D5E77"
          ctx.lineWidth = 2
          ctx.moveTo(startX, startY)
          ctx.lineTo(endX, endY)
          ctx.stroke()

          // Only animate if this stage is active or completed
          const stageId = stageElements[i].getAttribute("data-stage-id")
          const stage = stages.find((s) => s.id === stageId)

          if (stage && (stage.status === "running" || stage.status === "success")) {
            // Draw flowing particles
            const time = Date.now() / 1000
            const particleCount = 3

            for (let j = 0; j < particleCount; j++) {
              const t = (time * 0.5 + j / particleCount) % 1
              const x = startX + (endX - startX) * t
              const y = startY + (endY - startY) * t

              ctx.beginPath()
              ctx.fillStyle = stage.status === "success" ? "#36D399" : "#FF9900"
              ctx.arc(x, y, 4, 0, Math.PI * 2)
              ctx.fill()
            }
          }
        }
      }

      animationRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      cancelAnimationFrame(animationRef.current)
      window.removeEventListener("resize", resizeCanvas)
      if (container.contains(canvas)) {
        container.removeChild(canvas)
      }
    }
  }, [pipelineRunning, stages])

  // Get status icon based on stage status
  const getStatusIcon = (status: string) => {
    switch (status) {
      case "success":
        return <Check className="text-green-500" size={16} />
      case "failed":
        return <X className="text-red-500" size={16} />
      case "warning":
        return <AlertTriangle className="text-yellow-500" size={16} />
      case "running":
        return <div className="h-3 w-3 rounded-full border-2 border-[#FF9900] border-t-transparent animate-spin"></div>
      default:
        return null
    }
  }

  return (
    <div className="bg-[#0F1924] rounded-xl border border-[#FF9900]/20 shadow-xl overflow-hidden">
      {/* Header */}
      <div className="bg-[#232F3E] p-3 border-b border-[#FF9900]/20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <GitBranch size={16} className="text-[#FF9900]" />
          <span className="font-mono text-xs sm:text-sm">feature/new-auth-system</span>
        </div>
        <div className="flex items-center gap-2">
          {/* Only show pipeline number after hydration */}
          <span className="text-xs sm:text-sm text-gray-400">
            {isHydrated ? `Pipeline #${pipelineNumber}` : "Pipeline"}
          </span>
          {pipelineRunning ? (
            <span className="flex items-center gap-1 text-xs bg-[#FF9900]/20 text-[#FF9900] px-2 py-0.5 rounded-full">
              <div className="h-1.5 w-1.5 rounded-full bg-[#FF9900] animate-pulse"></div>
              Running
            </span>
          ) : pipelineComplete ? (
            <span className="flex items-center gap-1 text-xs bg-green-500/20 text-green-500 px-2 py-0.5 rounded-full">
              <Check size={10} />
              Complete
            </span>
          ) : (
            <span className="flex items-center gap-1 text-xs bg-gray-500/20 text-gray-400 px-2 py-0.5 rounded-full">
              Init
            </span>
          )}
        </div>
      </div>

      {/* Body - removed the p-3 sm:p-4 md:p-6 padding from this container */}
      <div>
        {/* Pipeline Stages - added padding only to this section */}
        <div className="relative p-3 sm:p-4 md:p-6 pb-0 sm:pb-0 md:pb-0" ref={pipelineRef}>
          <div className="flex justify-between items-center">
            {stages.map((stage) => (
              <div
                key={stage.id}
                data-stage-id={stage.id}
                className={`pipeline-stage relative flex flex-col items-center ${
                  activeStage === stage.id ? "scale-110" : ""
                } transition-all duration-300`}
              >
                <div
                  className={`w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center ${
                    stage.status === "pending"
                      ? "bg-[#232F3E] text-gray-400"
                      : stage.status === "running"
                        ? "bg-[#FF9900] text-black"
                        : stage.status === "success"
                          ? "bg-green-500 text-white"
                          : stage.status === "failed"
                            ? "bg-red-500 text-white"
                            : "bg-yellow-500 text-black"
                  } transition-colors duration-300`}
                >
                  {stage.icon}
                </div>
                <span className="mt-1 text-[10px] sm:text-xs font-medium">{stage.name}</span>
                <div className="absolute -bottom-5 left-1/2 transform -translate-x-1/2">
                  {getStatusIcon(stage.status)}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Terminal Output - added padding only to this section */}
        <div className="relative p-3 sm:p-4 md:p-6 pt-6 sm:pt-6 md:pt-6">
          {/* Code Snippet Overlay */}
          {showCodeSnippet && (
            <div className="absolute inset-0 z-10 bg-[#0F1924]/90 backdrop-blur-sm flex items-center justify-center animate-fade-in">
              <div className="bg-[#232F3E] rounded-lg border border-[#FF9900]/20 shadow-xl w-full max-w-md sm:max-w-lg md:max-w-2xl overflow-hidden">
                <div className="bg-[#1A2433] p-2 border-b border-[#FF9900]/20 flex items-center">
                  <div className="flex gap-1.5">
                    <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-red-500"></div>
                    <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="ml-3 text-[10px] sm:text-xs font-mono">auth-middleware.ts</div>
                </div>
                <pre className="p-3 sm:p-4 text-xs sm:text-sm font-mono text-gray-300 overflow-auto max-h-60 sm:max-h-80">
                  <code>{codeSnippet}</code>
                </pre>
              </div>
            </div>
          )}

          {/* Security Alert Overlay */}
          {showSecurityAlert && (
            <div className="absolute inset-0 z-10 bg-[#0F1924]/80 backdrop-blur-sm flex items-center justify-center animate-fade-in">
              <div className="bg-red-900/50 rounded-lg border border-red-500 shadow-xl p-4 sm:p-6 max-w-xs sm:max-w-sm md:max-w-md mx-4">
                <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                  <div className="bg-red-500 rounded-full p-1.5 sm:p-2">
                    <Shield size={16} className="sm:w-6 sm:h-6 text-white" />
                  </div>
                  <h3 className="text-base sm:text-xl font-bold text-white">Security Vulnerability Detected</h3>
                </div>
                <p className="text-xs sm:text-sm text-gray-200 mb-3 sm:mb-4">
                  High severity vulnerability found in axios@0.21.1: Server-Side Request Forgery (SSRF)
                </p>
                <div className="bg-[#232F3E] p-2 sm:p-3 rounded border border-[#FF9900]/20 font-mono text-xs sm:text-sm mb-3 sm:mb-4">
                  <p>Remediation: Upgrade to axios@0.21.2</p>
                </div>
                <div className="flex justify-end">
                  <button className="bg-red-500 hover:bg-red-600 text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded text-xs sm:text-sm transition-colors">
                    Fixing Automatically...
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Deployment Progress Overlay */}
          {deploymentProgress > 0 && deploymentProgress < 100 && (
            <div className="absolute inset-0 z-10 bg-[#0F1924]/80 backdrop-blur-sm flex items-center justify-center animate-fade-in">
              <div className="bg-[#232F3E] rounded-lg border border-[#FF9900]/20 shadow-xl p-4 sm:p-6 max-w-xs sm:max-w-sm md:max-w-md w-full mx-4">
                <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                  <div className="bg-[#FF9900] rounded-full p-1.5 sm:p-2">
                    <Rocket size={16} className="sm:w-6 sm:h-6 text-black" />
                  </div>
                  <h3 className="text-base sm:text-xl font-bold text-white">Deploying to Production</h3>
                </div>
                <div className="mb-2 flex justify-between text-xs sm:text-sm">
                  <span>Progress</span>
                  <span>{Math.round(deploymentProgress)}%</span>
                </div>
                <div className="w-full bg-[#0F1924] rounded-full h-1.5 sm:h-2 mb-3 sm:mb-4">
                  <div
                    className="bg-gradient-to-r from-[#FF9900] to-[#FF5757] h-1.5 sm:h-2 rounded-full transition-all duration-300"
                    style={{ width: `${deploymentProgress}%` }}
                  ></div>
                </div>
                <div className="text-xs sm:text-sm text-gray-400">
                  {deploymentProgress < 30 && "Preparing Kubernetes manifests..."}
                  {deploymentProgress >= 30 && deploymentProgress < 60 && "Applying configuration changes..."}
                  {deploymentProgress >= 60 && deploymentProgress < 90 && "Rolling out new pods..."}
                  {deploymentProgress >= 90 && "Running final health checks..."}
                </div>
              </div>
            </div>
          )}

          <div className="bg-[#1A2433] rounded-lg border border-[#FF9900]/20 overflow-hidden">
            <div className="bg-[#232F3E] p-2 border-b border-[#FF9900]/20 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 sm:h-3 sm:w-3 rounded-full bg-green-500"></div>
                <span className="text-[10px] sm:text-xs font-mono">
                  {activeStage ? `${activeStage}.log` : "pipeline.log"}
                </span>
              </div>
              <div className="flex items-center gap-2 sm:gap-3">
                <label className="flex items-center gap-1 text-[10px] sm:text-xs text-gray-400">
                  <input
                    type="checkbox"
                    checked={autoScroll}
                    onChange={() => setAutoScroll(!autoScroll)}
                    className="h-2.5 w-2.5 sm:h-3 sm:w-3"
                  />
                  Auto-scroll
                </label>
              </div>
            </div>
            <div
              ref={logContainerRef}
              className="p-2 sm:p-3 md:p-4 font-mono text-[10px] sm:text-xs md:text-sm text-gray-300 h-40 sm:h-48 md:h-64 overflow-auto"
            >
              {activeStage && (
                <div>
                  {stages
                    .find((s) => s.id === activeStage)
                    ?.logs.slice(0, currentLogIndex + 1)
                    .map((log, idx) => (
                      <div key={idx} className="leading-tight mb-1">
                        {log.startsWith("$") ? (
                          <span className="text-[#FF9900]">{log}</span>
                        ) : log.includes("error") || log.includes("fail") || log.includes("vulnerability") ? (
                          <span className="text-red-400">{log}</span>
                        ) : log.includes("success") || log.includes("passed") || log.includes("✓") ? (
                          <span className="text-green-400">{log}</span>
                        ) : (
                          <span>{log}</span>
                        )}
                      </div>
                    ))}
                  {pipelineRunning && activeStage && <div className="inline-block animate-pulse">▋</div>}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
