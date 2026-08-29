# Slide 2 Identity Portrait Revision Brief

## Intent

Restore the stronger previous Slide 2 identity composition, then repair only the side-panel duplication, optical face alignment, identity-block placement, and detached static registration cue. This is a restoration, not a redesign, and must not change other slides.

## Governing Principle

Preserve the preferred previous frame as the visual truth. The central portrait crop, scale, and perspective are frozen; implementation may change only the side-pillar positions and identity placement needed to make the composition balanced and deliberate.

## Clarification Override — Natural-Ratio Windows

The three pillars must preserve the original independent-window perspective. Do not force them into a single continuous panorama and do not stretch peripheral source regions to remove facial repetition.

- Keep the original mask geometry.
- Render each window from the same portrait source at its natural 3:4 aspect ratio.
- Use uniform scaling only; never use `preserveAspectRatio="none"` with mismatched geometry.
- Preserve the original center crop and zoom.
- Align the left crop to the outer-left source edge and the right crop to the outer-right source edge.
- Minor repeated hair or ear detail is acceptable. Do not repeat an eye, nose, mouth, or a second readable face.
- The visual target is three related portrait windows, not mathematically continuous source coordinates.

## Strengths to Restore

- The larger, confident portrait presence.
- The more zoomed-out central crop, including the complete vertical artwork and atmospheric upper brushwork.
- The previous central-panel perspective and size.
- The prior stage footprint and generous Apple/Google-like negative space.
- The soft coral ghost plate behind the portrait.

## Frozen Decisions

- Keep the previous central portrait crop, scale, and perspective unchanged.
- Keep both side pillars as naturally scaled alternate windows into the same portrait source.
- Remove recognizable facial fragments from both side panels.
- Move the identity block upward about 40px while preserving its left edge.
- Keep a controlled 20–24px gap between the name and role.
- Keep `SDE II at RingCentral` in muted navy-gray. Coral remains reserved for portrait artwork and the interaction system.
- Retain the soft coral ghost plate.
- Remove the registration crosshair from the static identity frame.
- Keep navigation inactive in this revision.

## Portrait, Source, and Mask Contract

1. Use the previous Slide 2 screenshot as the visual baseline for the central portrait.
2. Apply a restrained 8% uniform zoom and center the face with the natural-ratio center mapping: `x=65.5`, `y=31.5`, `width=479.52`, `height=639.36`.
3. Preserve the left mask and apply the same 8% zoom with an outer-left mapping: `x=0`, `y=257.92`, `width=305.37`, `height=407.16`.
4. Preserve the right mask and apply the same 8% zoom with an outer-right mapping: `x=265.25`, `y=156`, `width=384.75`, `height=513`.
5. Use `preserveAspectRatio="xMidYMid meet"` or an equivalent uniform-scale treatment for all three images.
6. Neither side mask may contain a recognizable repeated eye, nose, mouth, or readable second face. Peripheral hair, ear, shoulder, clothing, paper, brushwork, and coral plate are acceptable.
7. Keep the stage square at every breakpoint with `aspect-ratio: 1`; change width responsively rather than assigning an unrelated fixed height.

## Identity Alignment and Color

- Raise the existing identity block about 40px, without changing its left edge.
- Align the name visually with the portrait's lower-face or upper-chest region.
- Preserve generous negative space around the block.
- Maintain a 20–24px name-to-role gap.
- Render the role in muted navy-gray. Do not use coral for the full role line.

## Static Graphic Treatment

- Keep the restored portrait and soft coral ghost plate as the static frame's print-language cues.
- Remove the registration crosshair; without a real interaction it reads as detached decoration.
- Add no replacement registration mark or static ornament.

## Acceptance Criteria

1. **Central composition preserved**  
   Given the previous Slide 2 frame is the baseline, when the revised slide is compared with it, then the central portrait retains the same crop, scale, perspective, stage presence, upper brushwork, and complete vertical artwork.

2. **Natural three-panel perspective**  
   Given all three masks use the same portrait source, when the portrait is viewed across the panels, then every window retains uniform scaling and the original independent-window perspective without stretching.

3. **No readable second face**  
   Given the side crops are adjusted, when each side pillar is inspected, then neither repeats an eye, nose, mouth, or readable face; hair and ear edges may repeat alongside peripheral brushwork, coral plate, shoulder, clothing, or paper.

4. **Original center restored**  
   Given the frozen center composition, when the center source is positioned, then it matches the original crop and zoom without a tighter crop, artificial shift, or distorted perspective.

5. **Identity block aligned**  
   Given the current identity block, when the revision is applied, then it is about 40px higher, keeps its existing left edge, aligns with the lower-face or upper-chest region, and retains a 20–24px gap before the role.

6. **Color hierarchy preserved**  
   Given the role line and print accents are visible together, when the slide is reviewed, then the role is muted navy-gray and coral is confined to the portrait artwork and interaction system.

7. **Static frame simplified**  
   Given the slide is static, when it is displayed, then the coral ghost plate remains, the registration crosshair is absent, and navigation remains inactive.

8. **Revision remains scoped**  
   Given this revision targets Slide 2, when the change is reviewed, then no other slide, motion behavior, WebGL treatment, or live-site behavior has changed.

## Deferred / Out of Scope

- Meaningful registration cues may be reconsidered later only when they support a real interaction.
- Motion and WebGL work are deferred.
- Changes to navigation behavior are excluded; navigation stays inactive.
- Changes to other slides or the live site are excluded.
