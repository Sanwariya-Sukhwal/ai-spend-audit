package com.credexaudit.backend.service;

import com.credexaudit.backend.dto.AuditRequest;
import com.credexaudit.backend.dto.AuditResponse;
import com.credexaudit.backend.entity.Audit;
import com.credexaudit.backend.repository.AuditRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AuditService {

    @Autowired
    private AuditRepository auditRepository;

    public AuditResponse runAudit(
            AuditRequest request
    ) {

        AuditResponse response =
                new AuditResponse();

        double currentCost = 0;

        double optimizedCost = 0;

        double savings = 0;

        /*
            CHATGPT RULE
        */

        if (
                "ChatGPT".equals(request.getTool())
                        &&
                        "Team".equals(request.getPlan())
                        &&
                        request.getTeamSize() <= 2
        ) {

            currentCost =
                    30 * request.getSeats();

            optimizedCost =
                    20 * request.getSeats();

            savings =
                    currentCost - optimizedCost;

            response.setRecommendation(
                    "Switch to Plus"
            );

            response.setRiskLevel(
                    "Medium"
            );

            response.setCurrentSpend(
                    currentCost
            );

            response.setOptimizedSpend(
                    optimizedCost
            );

            response.setMonthlySavings(
                    savings
            );

            response.setAnnualSavings(
                    savings * 12
            );

            response.setReason(
                    "Small teams rarely need Team features."
            );
        }

        /*
            CURSOR RULE
        */

        else if (
                "Cursor".equals(request.getTool())
                        &&
                        "Business".equals(request.getPlan())
                        &&
                        request.getSeats() <= 2
        ) {

            currentCost =
                    40 * request.getSeats();

            optimizedCost =
                    20 * request.getSeats();

            savings =
                    currentCost - optimizedCost;

            response.setRecommendation(
                    "Switch to Cursor Pro"
            );

            response.setRiskLevel(
                    "High"
            );

            response.setCurrentSpend(
                    currentCost
            );

            response.setOptimizedSpend(
                    optimizedCost
            );

            response.setMonthlySavings(
                    savings
            );

            response.setAnnualSavings(
                    savings * 12
            );

            response.setReason(
                    "Business plan is unnecessary for small teams."
            );
        }

        /*
            CLAUDE RULE
        */

        else if (
                "Claude".equals(request.getTool())
                        &&
                        "Team".equals(request.getPlan())
                        &&
                        request.getTeamSize() <= 2
        ) {

            currentCost =
                    30 * request.getSeats();

            optimizedCost =
                    20 * request.getSeats();

            savings =
                    currentCost - optimizedCost;

            response.setRecommendation(
                    "Switch to Claude Pro"
            );

            response.setRiskLevel(
                    "Medium"
            );

            response.setCurrentSpend(
                    currentCost
            );

            response.setOptimizedSpend(
                    optimizedCost
            );

            response.setMonthlySavings(
                    savings
            );

            response.setAnnualSavings(
                    savings * 12
            );

            response.setReason(
                    "Small teams usually don't require Team features."
            );
        }

        /*
            GITHUB COPILOT RULE
        */

        else if (
                "Copilot".equals(request.getTool())
                        &&
                        "Business".equals(request.getPlan())
                        &&
                        request.getSeats() <= 3
        ) {

            currentCost =
                    19 * request.getSeats();

            optimizedCost =
                    10 * request.getSeats();

            savings =
                    currentCost - optimizedCost;

            response.setRecommendation(
                    "Switch to Copilot Individual"
            );

            response.setRiskLevel(
                    "Low"
            );

            response.setCurrentSpend(
                    currentCost
            );

            response.setOptimizedSpend(
                    optimizedCost
            );

            response.setMonthlySavings(
                    savings
            );

            response.setAnnualSavings(
                    savings * 12
            );

            response.setReason(
                    "Small teams usually don't require Business features."
            );
        }

        /*
            DEFAULT RULE
        */

        else {

            response.setRecommendation(
                    "Current setup looks optimized"
            );

            response.setRiskLevel(
                    "Safe"
            );

            response.setCurrentSpend(
                    request.getMonthlySpend()
            );

            response.setOptimizedSpend(
                    request.getMonthlySpend()
            );

            response.setMonthlySavings(
                    0
            );

            response.setAnnualSavings(
                    0
            );

            response.setReason(
                    "No major savings opportunities detected."
            );
        }

        /*
            SAVE AUDIT
        */

        Audit audit = new Audit();

        audit.setTool(
                request.getTool()
        );

        audit.setPlan(
                request.getPlan()
        );

        audit.setMonthlySpend(
                request.getMonthlySpend()
        );

        audit.setMonthlySavings(
                response.getMonthlySavings()
        );

        audit.setAnnualSavings(
                response.getAnnualSavings()
        );

        auditRepository.save(audit);

        return response;
    }
}