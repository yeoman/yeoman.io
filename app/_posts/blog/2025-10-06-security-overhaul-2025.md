---
layout: blog
title: "Strengthening Yeoman: Our 2025 Security Overhaul"
---

Following our [Security Policy Update](https://yeoman.io/blog/security-policy-update), we’ve completed a **full security review** across Yeoman’s organization.  
This milestone reinforces Yeoman’s foundation and ensures the project remains **reliable and secure** for the developer community.

## Strengthening Yeoman’s Security

As part of the [Maintenance Reboot Initiative](https://yeoman.io/blog/maintenance-reboot), the team has been hard at work improving processes, hardening infrastructure, and reducing long-term risks.  

Our 2025 security overhaul introduces clear responsibilities, proactive monitoring, and consistent policies across all Yeoman repositories.  

### Key Improvements

- **Organization-wide Security Policy**  
  A unified [`SECURITY.md`](https://github.com/yeoman/.github/blob/main/SECURITY.md) now defines responsible disclosure and response expectations.  
  Learn more in our [previous blog post](https://yeoman.io/blog/security-policy-update).
- **Centralized Resources**  
  A dedicated [`.github`](https://github.com/yeoman/.github) repository now manages shared templates, documentation, and workflows across Yeoman projects.
- **OpenSSF Scorecard Integration**  
  Automated audits and checks are now active across repositories.  
  Improvements include branch protection, dependency automation, and CI/CD hardening.  
  See our [OpenSSF Scorecard report](https://github.com/yeoman/.github/blob/main/tools/ossf_scorecard/report.md).
- **CVE Reviews and Patches**  
  Known vulnerabilities have been reviewed and mitigated.  
  See the [analysis discussion](https://github.com/yeoman/yeoman/issues/1779#issuecomment-2656182789).
- **Threat Model**  
  A new [Threat Model](https://github.com/yeoman/.github/blob/main/SECURITY.md#threat-model), based on Express and Node.js, outlines potential risks and mitigation strategies.
- **Access Control Updates**  
  GitHub and npm permissions were audited to follow the **principle of least privilege**, ensuring tighter access control across the board.
- **Dependency Updates and Releases**  
  Outdated dependencies were upgraded, and inactive packages are being refreshed with essential security updates.  
  Track progress in [issue #28](https://github.com/yeoman/.github/issues/28).


## Deprecations and Cleanup

To reduce maintenance overhead and improve overall security, several legacy repositories have been archived:
- [yeoman/generator-commonjs](https://github.com/yeoman/generator-commonjs)  
- [yeoman/generator-gruntfile](https://github.com/yeoman/generator-gruntfile)  
- [yeoman/generator-gruntplugin](https://github.com/yeoman/generator-gruntplugin)  
- [yeoman/generator-jasmine](https://github.com/yeoman/generator-jasmine)  
- [yeoman/generator-jquery](https://github.com/yeoman/generator-jquery)  
- [yeoman/generator-karma](https://github.com/yeoman/generator-karma)  
- [yeoman/generator-mocha](https://github.com/yeoman/generator-mocha)  
- [yeoman/Hackathons](https://github.com/yeoman/Hackathons)  
- [yeoman/yeoman-app](https://github.com/yeoman/yeoman-app)  
- [yeoman/yeoman-assert](https://github.com/yeoman/yeoman-assert)  
- [yeoman/yeoman-generator-list](https://github.com/yeoman/yeoman-generator-list)  
- [yeoman/yeoman-remote](https://github.com/yeoman/yeoman-remote)  
- [yeoman/yeoman-dummytest](https://github.com/yeoman/yeoman-dummytest)

Most of these repositories relied on outdated dependencies or duplicated functionality already available elsewhere in the ecosystem.  
Others were for initiatives that no longer are being worked on.

Their respective npm packages have also been deprecated.

## What’s Next

Security work is never truly done. We’ll continue monitoring **OpenSSF Scorecard** results, improving automation, and releasing regular maintenance updates.  

In parallel, we are also going through the plethora of still-active Yeoman packages and updating them to modern Node.js conventions.
That includes migrating from CommonJS (CJS) to ECMAScript Modules (ESM) and updating their dependencies.
This will make sure users are able to use the latest versions of both Yeoman and non-Yeoman packages, rather than old and potentially insecure predecessors.

Afterwards, we plan on auditing this documentation website and updating it to reflect all the latest changes in Yeoman.
Quite a lot has happened since the website was last overhauled!

Community feedback will continue to shape our priorities — your insights help keep Yeoman secure and dependable.

## Join the Conversation

Developers interested in contributing or staying informed can:

- Join our [Discord community](https://discord.gg/DqSm3meK)  
- Follow ongoing discussions in [GitHub Issue #1779](https://github.com/yeoman/yeoman/issues/1779)

Thank you to everyone helping keep Yeoman **secure, stable, and open-source strong**.  

**Happy hacking 🎩**

– The Yeoman Maintainers Team  
[@UlisesGascon](https://github.com/UlisesGascon) and [@JoshuaKGoldberg](https://github.com/JoshuaKGoldberg)
