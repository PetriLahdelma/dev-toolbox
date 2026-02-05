set shell := ["bash", "-euo", "pipefail", "-c"]

default:
  @just --list

doctor:
  ./scripts/doctor

lint-shell:
  ./scripts/lint-shell

doctor-ci path='.' report='.toolbox/doctor-ci.md':
  ./scripts/doctor-ci "{{path}}" --report "{{report}}"

self-test:
  ./scripts/self-test

smoke path='.':
  ./scripts/smoke "{{path}}"

bench cmd runs='10' out='.toolbox/bench':
  ./scripts/bench "{{cmd}}" "{{runs}}" "{{out}}"

changelog path='.':
  ./scripts/changelog "{{path}}"

changelog-apply path='.':
  ./scripts/changelog "{{path}}" --apply

release version path='.' apply='':
  ./scripts/release "{{version}}" "{{path}}" "{{apply}}"

profile-show profile:
  ./scripts/profile-show "{{profile}}"

profile-apply profile path='.' owner='@PetriLahdelma':
  ./scripts/profile-apply "{{profile}}" "{{path}}" --owner "{{owner}}"

scaffold name profile parent='.' owner='@PetriLahdelma':
  ./scripts/scaffold "{{name}}" "{{profile}}" "{{parent}}" --owner "{{owner}}"

image-opt path:
  ./scripts/image-opt "{{path}}"

log-scan file:
  ./scripts/log-scan "{{file}}"
