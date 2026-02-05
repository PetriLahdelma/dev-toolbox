.PHONY: help doctor lint-shell doctor-ci self-test smoke bench changelog changelog-apply release profile-show profile-apply scaffold image-opt log-scan

help:
	@printf "Available targets:\n"
	@printf "  doctor                                  Check local toolchain\n"
	@printf "  lint-shell                              Run shellcheck on scripts/templates\n"
	@printf "  doctor-ci TARGET=. REPORT=.toolbox/doctor-ci.md\n"
	@printf "                                          Validate repo baseline\n"
	@printf "  self-test                               Run full e2e validation matrix\n"
	@printf "  smoke TARGET=.                          Run lint/typecheck/test/build\n"
	@printf "  bench CMD='npm test' RUNS=10 OUT=.toolbox/bench\n"
	@printf "                                          Benchmark command\n"
	@printf "  changelog TARGET=.                      Preview changelog block\n"
	@printf "  changelog-apply TARGET=.                Write changelog block\n"
	@printf "  release VER=patch TARGET=. APPLY=1      Prepare release\n"
	@printf "  profile-show PROFILE=node-cli           Show profile JSON\n"
	@printf "  profile-apply PROFILE=node-cli TARGET=. OWNER=@PetriLahdelma\n"
	@printf "                                          Apply profile templates/workflows\n"
	@printf "  scaffold NAME=my-cli PROFILE=node-cli PARENT=. OWNER=@PetriLahdelma\n"
	@printf "                                          Scaffold project baseline\n"
	@printf "  image-opt PATH=...                      Optimize images\n"
	@printf "  log-scan FILE=...                       Scan logs for high-signal errors\n"

doctor:
	./scripts/doctor

lint-shell:
	./scripts/lint-shell

doctor-ci:
	./scripts/doctor-ci "$(or $(TARGET),.)" --report "$(or $(REPORT),.toolbox/doctor-ci.md)"

self-test:
	./scripts/self-test

smoke:
	./scripts/smoke "$(or $(TARGET),.)"

bench:
	./scripts/bench "$(CMD)" "$(or $(RUNS),10)" "$(or $(OUT),.toolbox/bench)"

changelog:
	./scripts/changelog "$(or $(TARGET),.)"

changelog-apply:
	./scripts/changelog "$(or $(TARGET),.)" --apply

release:
	./scripts/release "$(or $(VER),patch)" "$(or $(TARGET),.)" "$(or $(APPLY),)"

profile-show:
	./scripts/profile-show "$(PROFILE)"

profile-apply:
	./scripts/profile-apply "$(PROFILE)" "$(or $(TARGET),.)" --owner "$(or $(OWNER),@PetriLahdelma)"

scaffold:
	./scripts/scaffold "$(NAME)" "$(PROFILE)" "$(or $(PARENT),.)" --owner "$(or $(OWNER),@PetriLahdelma)"

image-opt:
	./scripts/image-opt "$(PATH)"

log-scan:
	./scripts/log-scan "$(FILE)"
