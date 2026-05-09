package com.credexaudit.backend.dto;

import lombok.Data;

@Data
public class AuditResponse {

    private String recommendation;

    private double currentSpend;

    private double optimizedSpend;

    private double monthlySavings;

    private double annualSavings;

    private String riskLevel;

    private String reason;
}