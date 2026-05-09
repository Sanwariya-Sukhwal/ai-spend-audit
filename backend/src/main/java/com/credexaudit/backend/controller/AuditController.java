package com.credexaudit.backend.controller;

import com.credexaudit.backend.dto.AuditRequest;
import com.credexaudit.backend.dto.AuditResponse;
import com.credexaudit.backend.service.AuditService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/audit")
@CrossOrigin("*")
public class AuditController {

    @Autowired
    private AuditService auditService;

    @PostMapping
    public AuditResponse runAudit(
            @RequestBody AuditRequest request
    ) {

        return auditService.runAudit(request);
    }
}